import * as React from "react"

function HorizontalThreeDots(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="#4D4D4D" stroke="#4D4D4D">
                <path d="M3.333 6.664C2.6 6.664 2 7.264 2 7.997c0 .734.6 1.334 1.333 1.334.734 0 1.334-.6 1.334-1.334 0-.733-.6-1.333-1.334-1.333zM12.667 6.664c-.734 0-1.334.6-1.334 1.333 0 .734.6 1.334 1.334 1.334.733 0 1.333-.6 1.333-1.334 0-.733-.6-1.333-1.333-1.333zM8 6.664c-.733 0-1.333.6-1.333 1.333 0 .734.6 1.334 1.333 1.334s1.333-.6 1.333-1.334c0-.733-.6-1.333-1.333-1.333z" />
            </g>
        </svg>
    )
}

export default HorizontalThreeDots
