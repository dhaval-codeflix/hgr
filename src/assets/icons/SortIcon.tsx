import * as React from "react"

function SortIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="gray">
                <path d="M6.967 4.98a.495.495 0 01-.354-.147L4.487 2.707 2.36 4.833a.503.503 0 01-.707 0 .503.503 0 010-.706l2.48-2.48a.5.5 0 01.707 0l2.48 2.48a.503.503 0 010 .706c-.1.1-.227.147-.353.147z" />
                <path d="M4.487 14.5a.504.504 0 01-.5-.5V2c0-.273.226-.5.5-.5.273 0 .5.227.5.5v12c0 .273-.227.5-.5.5zM11.52 14.502a.5.5 0 01-.354-.147l-2.48-2.48a.503.503 0 010-.707.503.503 0 01.707 0l2.127 2.127 2.127-2.127a.503.503 0 01.706 0 .503.503 0 010 .707l-2.48 2.48a.51.51 0 01-.353.147z" />
                <path d="M11.513 14.5a.504.504 0 01-.5-.5V2c0-.273.227-.5.5-.5.274 0 .5.227.5.5v12a.5.5 0 01-.5.5z" />
            </g>
        </svg>
    )
}

export default SortIcon
