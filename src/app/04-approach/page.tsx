"use client";

import { Button } from "@/components/ui/button";
import OpenDatabaseModal from "@/app/04-approach/database-modal/open-database-modal";
import { useModalsStore } from "./modals";

export default function FourthApproachPage() {
  const openModal = useModalsStore((state) => state.openModal);
  const openDatabaseModal = () =>
    openModal({ children: <OpenDatabaseModal />, id: "open-database-modal" });

  return <Button onClick={openDatabaseModal}>Open Database</Button>;
}
