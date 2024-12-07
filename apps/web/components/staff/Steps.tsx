import { cn } from "@/lib/utils";
import { staffSteps } from "@/utils/data";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

const Steps = () => {
  const { currentStep } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
    }))
  );

  return (
    <div className="space-y-14 lg:border-r border-dashed border-mistyBlue/10">
      {staffSteps.map((step) => (
        <div
          key={step.id}
          className={cn(
            "flex items-center gap-4 pr-10",
            step.id !== 1 &&
              "relative before:absolute before:h-11 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-[50px]"
          )}
        >
          <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
            <div
              className={cn(
                "rounded-full w-full h-full flex items-center duration-300 ease-linear",
                step.id === currentStep
                  ? "dark:bg-brand/50 bg-brand/70 text-white"
                  : "bg-[#eeeded] dark:bg-[#242442] dark:text-white/70 text-dark-2/60"
              )}
            >
              <step.icon className="size-[22px] m-auto" />
            </div>
          </div>
          <div className="text-left">
            <p
              className={cn(
                "font-semibold text-sm duration-300 ease-linear",
                step.id === currentStep
                  ? "text-brand"
                  : "dark:text-white text-dark-2"
              )}
            >
              {step.title}
            </p>
            <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
