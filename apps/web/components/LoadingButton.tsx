import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCircleDashed } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

interface LoadingButtonProps {
  text: string;
  variant:
    | "outline"
    | "default"
    | "destructive"
    | "white"
    | "secondary"
    | "ghost"
    | "link"
    | "brand"
    | "dashed"
    | null
    | undefined;
}

export default function LoadingButton({ text, variant }: LoadingButtonProps) {
  const [status, setStatus] = useState<"loading" | "idle">("idle");
  const isEnabled = status === "idle";

  const changeStatus = async () => {
    if (!isEnabled) {
      return;
    }

    setStatus("loading");

    await wait(1500);
    setStatus("idle");
  };

  return (
    <Button
      onClick={changeStatus}
      disabled={!isEnabled}
      variant={variant}
      className="min-w-40"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.075 }}
          className={cn("flex items-center justify-center gap-1")}
        >
          {status === "loading" ? (
            <LuCircleDashed className="h-4 w-4 animate-spin" />
          ) : (
            text
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
