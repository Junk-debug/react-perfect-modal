import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EditProductModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Product Modal</DialogTitle>
      </DialogHeader>
      <DialogFooter>
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  );
}
