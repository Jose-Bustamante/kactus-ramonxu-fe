import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Todo({ name }) {
  return (
    <Box sx={{
      padding: '12px', margin: '12px', boxSizing: 'border-box',
    }}
    >
      <Card>
        <CardContent>
          {name || 'No name'}
        </CardContent>
      </Card>
    </Box>
  );
}

Todo.propTypes = {
  name: PropTypes.string,
};

Todo.defaultProps = {
  name: 'Rahul',
};

export default Todo;
