import { useState, useEffect } from "react";
import React from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [userPoints, setUserPoints] = useState({});
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const claimPoints = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/claim/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      setUserPoints(prev => ({ ...prev, [userId]: data.totalPoints }));
    } catch (error) {
      console.error("Error claiming points:", error);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUserName || !newUserEmail) return;
    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newUserName, email: newUserEmail })
      });
      const user = await response.json();
      setUsers(prev => [...prev, user]);
      setNewUserName("");
      setNewUserEmail("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="user-list">
      <div className="user-list-heading">
        <h2>User List</h2>
        <ul className="user-list-all-items">
          {users.map(user => (
            <li className="user-list-items-row" key={user._id}>
            <span className="user-list-items">{user.name}</span>
            <button
              className="claim-button"
              onClick={() => claimPoints(user._id)}
              style={{ marginLeft: "10px" }}
            >
              Claim
            </button>
            <span
            style={{
              marginLeft: "15px",
              color: "#ffe600",
              minWidth: "90px",
              display: "inline-block"
            }}
          >
            Points: {userPoints[user._id] ?? user.totalPoints ?? 0}
          </span>
          </li>
          ))}
        </ul>
        {/* Add User Form */}
        <form onSubmit={handleAddUser} style={{ marginTop: "20px" }} className="add-user-form">
          <input
            type="text"
            placeholder="Name"
            value={newUserName}
            onChange={e => setNewUserName(e.target.value)}
            required
            style={{ marginRight: "10px" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUserEmail}
            onChange={e => setNewUserEmail(e.target.value)}
            required
            style={{ marginRight: "10px" }}
          />
          <button type="submit" className="claim-button">Add User</button>
        </form>
      </div>
    </div>
  );
}
export default UserList;