
import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CalendarDialogProps = {
  children: React.ReactNode;
  className?: string;
  buttonVariant?: "orange" | "pink" | "default" | "outline";
  buttonSize?: "default" | "sm" | "lg" | "xl";
  customTrigger?: React.ReactNode;
};

const CalendarDialog = ({
  children,
  className,
  buttonVariant = "orange",
  buttonSize = "xl",
  customTrigger,
}: CalendarDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {customTrigger || (
          <Button
            variant={buttonVariant}
            size={buttonSize}
            className={cn("group", className)}
          >
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="zcal-inline-widget h-[600px] w-full">
          <a href="https://zcal.co/himanshuchauhan" className="hidden">
            Schedule a meeting
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarDialog;
