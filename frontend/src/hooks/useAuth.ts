import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<null | { id: string; name: string }>(null);
  const signIn = async (email: string, password: string) => {
    setUser({ id: '1', name: email });
  };
  const signOut = async () => setUser(null);
  return { user, signIn, signOut };
}


