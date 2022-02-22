import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

function Todo({ name, description, completed }) {
  return (
    <Box sx={{
      padding: '12px', margin: '12px', boxSizing: 'border-box',
    }}
    >
      <Card sx={{ backgroundColor: completed ? 'lightgray' : 'white' }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ alignSelf: 'center' }}>
            <Typography variant="h5" component="div">
              {name || 'No name'}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description || 'No name'}
            </Typography>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <Checkbox checked={completed} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} inputProps={{ 'aria-label': 'Checkbox demo' }} icon={<CircleIcon />} checkedIcon={<CheckCircleIcon />} />
          </div>
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
