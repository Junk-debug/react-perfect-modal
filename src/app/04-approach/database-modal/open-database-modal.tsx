import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useModalsStore } from "../modals";
import NewDatabaseModal from "./new-database-modal";

export default function OpenDatabaseModal() {
  const openModal = useModalsStore((state) => state.openModal);
  const openNewDatabaseModal = () =>
    openModal({ id: "new-database-modal", children: <NewDatabaseModal /> });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Open database</DialogTitle>
      </DialogHeader>
      <DialogFooter>
        <div>
          <Button variant="outline">Cancel</Button>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={openNewDatabaseModal}>
            New...
          </Button>
          <Button>Confirm</Button>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
