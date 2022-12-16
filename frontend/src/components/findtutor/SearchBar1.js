import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar1.css";

function SearchBar1() {
  return (
    <div className="main">
      <h1>Browse a Tutor</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search a Tutor"
          color="primary"
        />
      </div>
      
    </div>
  );
}

export default SearchBar1;