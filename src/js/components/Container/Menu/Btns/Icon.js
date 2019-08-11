import React from "react";

const Icon = ({ fill = "#0FD65A", onClick }) => (
  <svg
    onClick={onClick}
    x="0px"
    y="0px"
    viewBox="0 0 29.3 16.2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M26.6,0.5l-12,12l-12-12c-0.6-0.6-1.6-0.6-2.2,0s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7
      c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z"
    />
  </svg>
);

export default Icon;
