import { createContext, useEffect, useState } from 'react';
import { api, createSession } from '../services/api';

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setLoading(false);
    
  }, []);

  const login = async (email: string, password: string) => {
    const response = await createSession(email, password);
    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    console.log('login', response.data);

    setUser(loggedUser);
    window.location.href ='/comunidade';
  };
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] =false;

    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
