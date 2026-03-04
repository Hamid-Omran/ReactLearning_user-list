import React, { useState } from "react";
import usersData from "./data/users.json";

function App() {
  const [users, setUsers] = useState(usersData); // Initial state from JSON fileله

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Users list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} Years - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;