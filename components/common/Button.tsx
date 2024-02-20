import React, { ReactNode } from "react";

interface CommonButtonProps {
  onClick: () => Promise<void>; // 수정 가능한 타입으로 변경
  children: ReactNode;
}

const Button = ({ onClick, children }: CommonButtonProps) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 mr-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
