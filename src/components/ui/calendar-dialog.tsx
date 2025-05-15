
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

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
  // Direct Calendly URL
  const calendlyUrl = "https://calendly.com/himanshu_chauhan/30min";

  return (
    <>
      {customTrigger ? (
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={className}>
          {customTrigger}
        </a>
      ) : (
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={cn("group", className)}
          asChild
        >
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            {children}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      )}
    </>
  );
};

export default CalendarDialog;
