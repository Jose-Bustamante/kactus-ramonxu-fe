import React from 'react';
import Box from '@mui/material/Box';
import Todo from '../../components/Todo';

function Todos() {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <Todo />
    </Box>
  );
}

export default Todos;
