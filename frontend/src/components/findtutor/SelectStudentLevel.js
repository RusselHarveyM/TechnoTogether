import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectStudentLevel() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Student Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="StudentLevel"
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={10}>Elementary</MenuItem>
          <MenuItem value={20}>Junior HighSchool</MenuItem>
          <MenuItem value={20}>Senior HighSchool</MenuItem>
          <MenuItem value={30}>College</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}