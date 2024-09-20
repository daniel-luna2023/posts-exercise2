import { createContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import api from '@/utils/api';
import type { UserProps } from '@/types';

export interface UsersContextProps {
  users: UserProps[];
  setUsers: Dispatch<SetStateAction<UserProps[]>>;
}
export const UsersContext = createContext({} as UsersContextProps)

export default function UsersProvider(  { children }: { children: React.ReactNode; }  ){
  const [users, setUsers] = useState<UserProps[]>([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/get/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  const value = useMemo(() => (
    {
      users,
      setUsers
    }
  ), [users])
  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}
