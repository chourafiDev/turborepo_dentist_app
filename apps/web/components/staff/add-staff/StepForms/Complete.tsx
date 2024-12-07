import { DiplomaVerifiedIcon } from "@/utils/assets";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/ui/button";

// zustand
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

const Complete = () => {
  const router = useRouter();

  const { currentStep, reset } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      reset: state.reset,
    }))
  );

  const handleClose = () => {
    reset();
    router.push("/staff");
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: currentStep * 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -currentStep * 100 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex flex-col justify-center items-center dark:bg-dark-3/60 bg-mistyBlue/5 rounded-xl gap-4 py-16"
    >
      <DiplomaVerifiedIcon className="size-14 text-green" />

      <p className="text-dark-2 dark:text-white text-center text-xl font-medium mb-10">
        Your <span className="text-green font-semibold">staff</span> has been{" "}
        <br />
        successfully submitted!
      </p>

      <Button variant="secondary" size="lg" onClick={handleClose}>
        List staff
      </Button>
    </motion.div>
  );
};

export default Complete;
