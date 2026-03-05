import React, { useState } from "react";
import usersData from "./data/users.json";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField
} from "@mui/material";

function App() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  // Search by Name
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by Name
  const sortedUsers = [...filteredUsers].sort((a, b) => {
  if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
  if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
  return 0;
});

const requestSort = (key) => {
  let direction = "asc";
  if (sortConfig.key === key && sortConfig.direction === "asc") {
    direction = "desc";
  }
  setSortConfig({ key, direction });
};

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
                <TableCell style={{ color: "white", cursor: "pointer" }} onClick={() => requestSort("id")}>Number</TableCell>
                <TableCell style={{ color: "white", cursor: "pointer" }} onClick={() => requestSort("name")}>Name</TableCell>
                <TableCell style={{ color: "white", cursor: "pointer" }} onClick={() => requestSort("age")}>Age</TableCell>
                <TableCell style={{ color: "white", cursor: "pointer" }} onClick={() => requestSort("city")}>City</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sortedUsers.map(user => (
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