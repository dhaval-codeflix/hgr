import * as React from "react"

function SearchIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                <path d="M7.666 14.503C3.9 14.503.833 11.436.833 7.669.833 3.903 3.9.836 7.666.836c3.767 0 6.834 3.067 6.834 6.833 0 3.767-3.067 6.834-6.834 6.834zm0-12.667a5.84 5.84 0 00-5.833 5.833 5.84 5.84 0 005.833 5.834A5.84 5.84 0 0013.5 7.669a5.84 5.84 0 00-5.834-5.833zM14.667 15.168a.495.495 0 01-.354-.147l-1.333-1.333a.503.503 0 010-.707.503.503 0 01.707 0l1.333 1.333a.503.503 0 010 .707c-.1.1-.227.147-.353.147z" />
            </g>
        </svg>
    )
}

export default SearchIcon
