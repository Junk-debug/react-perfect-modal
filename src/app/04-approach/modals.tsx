/* eslint-disable react/no-array-index-key */

"use client";

import { Dialog } from "@/components/ui/dialog";
import { create } from "zustand";

interface Modal {
  isOpen: boolean;
  children: React.ReactNode;
  id: string;
}

interface ModalsState {
  modals: Modal[];
  openModal: ({
    children,
    id,
  }: {
    children: React.ReactNode;
    id: string;
  }) => void;
  closeModal: (id: string) => void;
}

export const useModalsStore = create<ModalsState>()((set) => ({
  modals: [],
  openModal: ({ children, id }) =>
    set((prevState) => {
      if (!prevState.modals.some((modal) => modal.id === id)) {
        return {
          modals: [...prevState.modals, { children, id, isOpen: true }],
        };
      }

      const modals = prevState.modals.slice();
      const index = modals.findIndex((modal) => modal.id === id);
      modals[index] = { ...modals[index], isOpen: true };

      return { modals };
    }),
  closeModal: (id) =>
    set((prevState) => ({
      modals: prevState.modals.map((modal) => {
        if (modal.id === id) {
          return { ...modal, isOpen: false };
        }
        return modal;
      }),
    })),
}));

export default function Modals() {
  const modals = useModalsStore((state) => state.modals);

  const closeModal = useModalsStore((state) => state.closeModal);

  return (
    <>
      {modals.map((modal) => {
        return (
          <Dialog
            key={modal.id}
            open={modal.isOpen}
            onOpenChange={() => closeModal(modal.id)}
          >
            {modal.children}
          </Dialog>
        );
      })}
    </>
  );
}
