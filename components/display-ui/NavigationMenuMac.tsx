"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { Tooltip } from "./ToolTipForMenu";
import Image from "next/image";

/* ---------- Container ---------- */
export function NavigateMenu({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-30
        flex items-end gap-4 px-6 py-3
        rounded-2xl bg-black/60 backdrop-blur-md shadow-xl h-[9%]
      "
    >
      {/* Inject mouseX into each child */}
      {Array.isArray(children)
        ? children.map((child, i) =>
            child && typeof child === "object" && "type" in child
              ? { ...child, props: { ...child.props, mouseX, key: i } }
              : child
          )
        : children}
    </motion.div>
  );
}

/* ---------- Item ---------- */
type NavigateItemProps = {
  src: string;
  alt?: string;
  size?: number;
  href?: string;
  mouseX?: MotionValue;
  onClick?: () => void;
  tooltipContent?: string;
};

export function NavigateItem({
  src,
  alt = "",
  size = 40,
  href,
  mouseX,
  onClick,
  tooltipContent,
}: NavigateItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  // distance of cursor to this icon’s center
  const distance = useTransform(mouseX!, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // map distance → width
  const widthSync = useTransform(
    distance,
    [-150, 0, 150],
    [size, size * 2.2, size]
  );
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 110,
    damping: 12,
  });

  // handle click
  const handleClick = () => {
    if (onClick) onClick();
    else if (href) window.open(href, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="
        flex aspect-square items-center justify-center
        rounded-xl bg-white/90 cursor-pointer shadow-md
      "
      onClick={handleClick}
    >
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
          {tooltipContent && (
            <Tooltip.Content
              content={tooltipContent}
              position="simple"
              className="mb-8"
            />
          )}
        </Tooltip.Trigger>
      </Tooltip.Root>
    </motion.div>
  );
}
