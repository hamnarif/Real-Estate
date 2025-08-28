"use client";
import { createContext, useContext, useState, useMemo } from 'react';

type User = { id: string; name: string } | null;
type AuthContextValue = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      signIn: async (email: string) => setUser({ id: '1', name: email }),
      signOut: async () => setUser(null),
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider');
  return ctx;
}


