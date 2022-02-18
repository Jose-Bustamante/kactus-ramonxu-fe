import React from 'react';
import {
  useQuery,
} from 'react-query';
import Box from '@mui/material/Box';
import Todo from '../../components/Todo';
import { getTodos } from '../../api/todos';

const todoItems = [
  {
    id: 1,
    title: 'Go to Market',
    description: 'Buy ingredients to prepare dinner',
    completed: true,
  },
  {
    id: 2,
    title: 'Study',
    description: 'Read Algebra and History textbook for the upcoming test',
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: 'Article',
    description: 'Write article on how to use Django with React',
    completed: false,
  },
];

function Todos() {
  const query = useQuery('todos', getTodos);
  console.log(query.data);
  return (
    <Box sx={{ overflow: 'auto' }}>
      {todoItems.map(({
        id, title, description, completed,
      }) => <Todo name={title} description={description} completed={completed} key={id} />)}
      <Todo />
    </Box>
  );
}

export default Todos;
