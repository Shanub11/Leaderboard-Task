import { useState, useEffect } from "react";
import React from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/leaderboard")
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error("Error fetching leaderboard:", error));
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboard-heading">
        <h2>Leaderboard</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "rgba(255,255,255,0.04)" }}>
          <thead>
            <tr style={{ color: "#ffe082", fontSize: "18px" }}>
              <th style={{ padding: "10px", borderBottom: "2px solid #ffe082" }}>Rank</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ffe082" }}>User</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ffe082" }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, idx) => (
              <tr key={user.userId} style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}>
                <td style={{ padding: "10px" }}>{idx + 1}</td>
                <td style={{ padding: "10px" }}>{user.name}</td>
                <td style={{ padding: "10px" }}>{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;