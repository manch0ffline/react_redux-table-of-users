import { User } from './types/User';

// eslint-disable-next-line operator-linebreak
const BASE_URL = 'https://jsonplaceholder.typicode.com';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url;

  return wait(300)
    .then(() => fetch(fullURL))
    .then(response => response.json());
}

export const getUsers = () => get<User[]>('/users');

// export const getUser = (userId: number) => get<User>(`/users/${userId}`);
