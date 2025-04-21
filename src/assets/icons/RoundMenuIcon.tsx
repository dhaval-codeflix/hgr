import * as React from "react"

function RoundMenuIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g stroke="#666" strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M10 18.33c4.584 0 8.334-3.75 8.334-8.333S14.584 1.664 10 1.664c-4.583 0-8.333 3.75-8.333 8.333 0 4.584 3.75 8.334 8.333 8.334z"
                    strokeWidth={1.5}
                />
                <path
                    d="M13.33 10.003h.008M9.996 10.003h.008M6.662 10.003h.008"
                    strokeWidth={2}
                />
            </g>
        </svg>
    )
}

export default RoundMenuIcon
