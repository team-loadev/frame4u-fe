'use client'
import React, { ReactNode } from 'react';
import { colors } from '../design-token';

interface IButtonType {
  onClick: () => void;
  children: ReactNode;
  isRound?: boolean;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  borderColor?: string;
}

function Button({
  onClick,
  children,
  isRound,
  backgroundColor = colors.gray[900],
  hoverBackgroundColor = colors.gray[800],
  color = colors.gray[100],
  borderColor = 'none',
}: IButtonType) {
  const radiusClass = isRound ? "rounded-full" : "rounded-lg";
  const paddingClass = "px-4 py-[10px]";

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${paddingClass} ${radiusClass} transition-colors duration-500 flex items-center justify-center gap-[10px]`}
      style={{
        backgroundColor,
        color,
        border: `1px solid ${borderColor}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverBackgroundColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = backgroundColor;
      }}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
