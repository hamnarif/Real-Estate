"use client";
import { createContext, useContext, useState, useMemo } from 'react';

type UIContextValue = {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const value = useMemo<UIContextValue>(
    () => ({
      modalOpen,
      openModal: () => setModalOpen(true),
      closeModal: () => setModalOpen(false),
    }),
    [modalOpen]
  );
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}


