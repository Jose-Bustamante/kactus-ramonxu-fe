import React from 'react';
import {
  useQuery,
} from 'react-query';
import Box from '@mui/material/Box';
import Todo from '../../components/Todo';
import { getTodos } from '../../api/todos';

function Todos() {
  const {
    isLoading, error, data, isFetching,
  } = useQuery('todos', getTodos);

  if (isLoading || isFetching) return 'Loading ...';

  if (error) return `The following exception happened while fetching the data ${error}`;

  return (
    <Box sx={{ overflow: 'auto' }}>
      {data.map(({
        id, title, description, completed,
      }) => <Todo name={title} description={description} completed={completed} key={id} />)}
      <Todo />
    </Box>
  );
}

export default Todos;
