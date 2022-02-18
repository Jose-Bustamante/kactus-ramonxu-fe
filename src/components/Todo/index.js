import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function Todo({ name, description, completed }) {
  return (
    <Box sx={{
      padding: '12px', margin: '12px', boxSizing: 'border-box',
    }}
    >
      <Card>
        <CardContent>
          {name || 'No name'}
          {description || 'No name'}

          <Checkbox checked={completed} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} inputProps={{ 'aria-label': 'Checkbox demo' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

        </CardContent>
      </Card>
    </Box>
  );
}

Todo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  name: 'No name',
  description: 'No description',
  completed: false,
};

export default Todo;
