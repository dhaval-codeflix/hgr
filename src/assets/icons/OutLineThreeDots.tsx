import * as React from "react"

function OutLineThreeDots(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M3.333 9.83a1.832 1.832 0 110-3.666 1.832 1.832 0 110 3.667zm0-2.666a.834.834 0 10.001 1.667.834.834 0 000-1.667zM12.666 9.83a1.832 1.832 0 110-3.666 1.832 1.832 0 110 3.667zm0-2.666a.834.834 0 100 1.667.834.834 0 000-1.667zM8 9.83a1.832 1.832 0 110-3.666 1.832 1.832 0 110 3.667zm0-2.666a.834.834 0 100 1.667.834.834 0 000-1.667z"
                fill="gray"
            />
        </svg>
    )
}

export default OutLineThreeDots
