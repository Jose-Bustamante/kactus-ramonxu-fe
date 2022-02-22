import { API_LOCAL_PATH, API_TODOS_PATH } from './config';

export const getTodos = () => fetch(
  `${API_LOCAL_PATH}${API_TODOS_PATH}`,
).then((res) => res.json());

export const getTodo = (id) => {
  console.log('id', id);
  return fetch(
    `${API_LOCAL_PATH}/todo/${id}`,
  ).then((res) => res.json());
};
