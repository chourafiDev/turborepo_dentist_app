import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DangerCircleIcon } from "@/utils/assets";

type DeleteConfirmationDialogProps = {
  isDeleteOpen: boolean;
  setIsDeleteOpen: (value: boolean) => void;
  handleDelete?: () => void;
  children?: React.ReactNode;
};

const DeleteConfirmationDialog = ({
  isDeleteOpen,
  setIsDeleteOpen,
  handleDelete,
  children,
}: DeleteConfirmationDialogProps) => {
  return (
    <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-dark-2 dark:text-white flex items-center gap-2">
            <DangerCircleIcon className="size-6 text-red-500" /> Are you
            absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-dark-2/60">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter className="md:gap-0 gap-1">
          <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
            No, Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmationDialog;
