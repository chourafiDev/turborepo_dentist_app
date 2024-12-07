import { Button } from "@/components/ui/button";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { LuCheck } from "react-icons/lu";

const NavButtons = () => {
  const { currentStep, setCurrentStep } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
    }))
  );

  const prev = () => {
    setCurrentStep("dec");
  };

  return (
    <div className="flex items-center justify-between gap-2 mt-4">
      <div>
        {currentStep > 1 && (
          <Button variant="brand" onClick={prev}>
            <BsArrowLeftShort className="text-xl" /> Back
          </Button>
        )}
      </div>
      <Button variant="brand" type="submit">
        {currentStep < 2 ? (
          <>
            Submit and continue <BsArrowRightShort className="text-xl" />
          </>
        ) : (
          <>
            Submit and Confirm <LuCheck className="text-xl" />
          </>
        )}
      </Button>
    </div>
  );
};

export default NavButtons;
