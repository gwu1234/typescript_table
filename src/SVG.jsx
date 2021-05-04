import React from 'react'
import { image_code } from "./ImageCode.jsx"

/* chevron up arrow  */
export const UpArrowIcon = ({
    style = {},
    fill = 'var(--bgBlack)',
    width = '13.75',
    className = '',
    height = '15',
    viewBox = '0 0 448 512',
    d = "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z",
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g transform="translate(-24 -8)">
            <path d={d} fill={fill} />
        </g>
    </svg>
    
/* chevron down arrow  */
export const DownArrowIcon = ({
    style = {},
    fill = 'var(--bgBlack)',
    width = '13.75',
    className = '',
    height = '15',
    viewBox = '0 0 448 512',
    d = "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g transform="translate(-24 -8)">
            <path d={d} fill={fill} />
        </g>
    </svg>

