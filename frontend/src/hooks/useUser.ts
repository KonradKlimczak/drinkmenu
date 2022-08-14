import { useCallback, useState } from 'react';

import { UserOutput } from '../../../common';

type UseUserReturnType = {
  user?: UserOutput;
  login: (data: any) => void;
  logout: () => void;
};

export const useUser = (): UseUserReturnType => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    if (!raw) {
      return undefined;
    }
    return JSON.parse(raw);
  });

  const login = useCallback((data: any) => {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
    localStorage.removeItem('user');
  }, []);

  return {
    user,
    login,
    logout,
  };
};
