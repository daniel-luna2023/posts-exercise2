import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

export const useGetUserById = (userId: string) => {
  const { users } = useContext(UsersContext);
  return users.find((user) => user.id === parseInt(userId));
};
