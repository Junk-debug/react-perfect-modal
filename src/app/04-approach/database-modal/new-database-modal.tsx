import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DashedPlaceholder from "@/components/ui/dashed-placeholder";

export default function NewDatabaseModal() {
  return (
    <DialogContent className="w-[400px] h-[450px]">
      <DialogHeader>
        <DialogTitle>New Database</DialogTitle>
      </DialogHeader>
      <DashedPlaceholder />
    </DialogContent>
  );
}
