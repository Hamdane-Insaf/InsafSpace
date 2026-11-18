import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}