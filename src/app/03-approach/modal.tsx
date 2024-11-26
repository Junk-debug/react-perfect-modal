"use client";

import { Dialog } from "@/components/ui/dialog";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  children: React.ReactNode;
  openModal: ({ children }: { children: React.ReactNode }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  children: null,
  openModal: ({ children }) => set(() => ({ isOpen: true, children })),
  closeModal: () => set(() => ({ isOpen: false, children: null })),
}));

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const children = useModalStore((state) => state.children);

  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {children}
    </Dialog>
  );
}
