
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CalendarDialogProps = {
  children: React.ReactNode;
  className?: string;
  buttonVariant?: "orange" | "pink" | "default" | "outline" | "yellow";
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
        <DialogTitle className="sr-only">Schedule a Meeting</DialogTitle>
        <iframe
          src="https://calendly.com/himanshu_chauhan/30min"
          width="100%"
          height="600px"
          frameBorder="0"
          title="Schedule a meeting"
          className="rounded-md"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarDialog;
