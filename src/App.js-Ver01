import React, { useState } from "react";
import usersData from "./data/users.json";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField
} from "@mui/material";

function App() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");

  // Search by Name
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>

      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }}>Number</TableCell>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }}>Age</TableCell>
              <TableCell style={{ color: "white" }}>City</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;