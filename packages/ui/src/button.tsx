"use client";

import type { ReactNode } from "react";
import { thing } from "@repo/utils/const";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Test: {thing} {children}
    </button>
  );
};
