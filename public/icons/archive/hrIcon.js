import React from "react";

const hrIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="23"
      viewBox="0 0 26 23"
    >
      <g
        id="prefix__Group_300"
        data-name="Group 300"
        transform="translate(-1873 -281)"
      >
        <g id="prefix__Group_323" data-name="Group 323">
          <path
            id="prefix__Path_168"
            fill={props.color}
            d="M5 0h16a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5z"
            data-name="Path 168"
            transform="translate(1873 281)"
          />
          <text
            id="prefix__HR"
            fill="#2a2d44"
            fontFamily="English"
            fontSize="12px"
            fontWeight="800"
            transform="translate(1878 296)"
          >
            <tspan x="0" y="0">
              HR
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};

export default hrIcon;