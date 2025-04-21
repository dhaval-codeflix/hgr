import * as React from "react"

function BackArrowIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 19.918l-6.52-6.52c-.77-.77-.77-2.03 0-2.8L15 4.078"
                stroke="#333"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BackArrowIcon
