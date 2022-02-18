import { API_LOCAL_PATH, API_TODOS_PATH } from './config';

export function getTodos() {
  fetch(
    `${API_LOCAL_PATH}${API_TODOS_PATH}`,
  ).then((res) => res.json());
}

export function getTodo(id) {
  console.log('ID', id);
  return null;
}
