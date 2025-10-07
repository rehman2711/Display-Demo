"use client";

import { ComponentProps, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/index";

// Outer Area For Avatar

type AvatarProps = ComponentProps<"span"> & { children: ReactNode };

const AvatarRoot = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        className={cn("rounded-full w-15 h-15", className)}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

AvatarRoot.displayName = "AvatarRoot";

// Image Section

type AvatarImageProps = ComponentProps<"img">;

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        className={cn("w-full h-full object-cover rounded-full", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

AvatarImage.displayName = "AvatarImage";

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
};
