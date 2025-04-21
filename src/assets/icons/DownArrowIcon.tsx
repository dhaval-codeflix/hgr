import * as React from "react"

function DownArrowIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                d="M8 11.2c-.467 0-.933-.18-1.287-.533L2.367 6.32a.503.503 0 010-.706.503.503 0 01.706 0L7.42 9.96c.32.32.84.32 1.16 0l4.347-4.346a.503.503 0 01.706 0 .503.503 0 010 .706l-4.346 4.347c-.354.353-.82.533-1.287.533z"
                fill="#666"
            />
        </svg>
    )
}

export default DownArrowIcon
