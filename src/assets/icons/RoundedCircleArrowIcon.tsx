import * as React from "react"

function RoundedCircleArrowIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="#666">
                <path d="M8 15.17A7.173 7.173 0 01.833 8.002 7.173 7.173 0 018 .836a7.173 7.173 0 017.166 7.167A7.173 7.173 0 018 15.169zM8 1.835a6.174 6.174 0 00-6.167 6.167c0 3.4 2.767 6.166 6.167 6.166s6.166-2.766 6.166-6.166c0-3.4-2.766-6.167-6.166-6.167z" />
                <path d="M8 10.008a.494.494 0 01-.353-.147L5.293 7.508a.503.503 0 010-.707.503.503 0 01.707 0l2 2 2-2a.503.503 0 01.707 0 .503.503 0 010 .707L8.353 9.86c-.1.1-.226.147-.353.147z" />
            </g>
        </svg>
    )
}

export default RoundedCircleArrowIcon
