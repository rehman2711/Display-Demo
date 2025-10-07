"use client";

import { cn } from "@/lib/index";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "w-full",
    "rounded-md",
    "border",
    "border-gray-300",
    "bg-white",
    "text-black",
    "px-3",
    "py-2",
    "text-sm",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      border: {
        primary: "focus:ring-2 focus:ring-blue-500",
        success: "focus:ring-2 focus:ring-green-500",
        none: "focus:ring-0",
      },
    },
    defaultVariants: {
      border: "none",
    },
  }
);

type CalendarProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Calendar = forwardRef<HTMLInputElement, CalendarProps>(
  ({ border, className, ...props }, ref) => {
    return (
      <input
        type="date"
        ref={ref}
        className={cn(inputStyles({ border }), className)}
        {...props}
      />
    );
  }
);

Calendar.displayName = "Calendar";
