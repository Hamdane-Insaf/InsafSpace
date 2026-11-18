import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a className={className} href={href} download={download}>
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