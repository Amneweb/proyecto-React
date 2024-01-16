import React from "react";

export const SvgCartWidget = ({ alto, ancho }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ancho}
      height={alto}
      fill="currentColor"
      className="bi bi-bag-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
    </svg>
  );
};