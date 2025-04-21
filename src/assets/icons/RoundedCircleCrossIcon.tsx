import * as React from "react"

function RoundedCircleCrossIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.5 22c5.5 0 10-4.5 10-10S18 2 12.5 2s-10 4.5-10 10 4.5 10 10 10zM9.67 14.832l5.66-5.66M15.33 14.832l-5.66-5.66"
                stroke="#666"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default RoundedCircleCrossIcon
