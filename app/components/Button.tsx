import React from "react";

type BtnTypeProps = {
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  width?: string;
  action?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button: React.FC<BtnTypeProps> = ({
  text,
  loading,
  disabled,
  children,
  width,
  action,
  onClick,
}) => {
  return (
    <button
      type={action}
      onClick={onClick}
      className={`bg-sky-500 text-white p-2 ${
        width === "full" ? "w-full" : null
      } rounded-md ${disabled ? "opacity-50 cursor-not-allowed" : null}`}
    >
      {children}
    </button>
  );
};

export default Button;
