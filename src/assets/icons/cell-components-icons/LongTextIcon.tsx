import * as React from "react"

function LongTextIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                d="M10 15.17H6c-3.62 0-5.167-1.547-5.167-5.167v-4C.833 2.383 2.38.836 6 .836h4c3.62 0 5.167 1.547 5.167 5.167v4c0 3.62-1.547 5.166-5.167 5.166zM6 1.835c-3.073 0-4.167 1.093-4.167 4.167v4c0 3.073 1.094 4.166 4.167 4.166h4c3.073 0 4.167-1.093 4.167-4.166v-4c0-3.074-1.094-4.167-4.167-4.167H6z"
                fill="#666"
            />
            <path
                d="M4.667 6.422a.502.502 0 01-.227-.946 7.992 7.992 0 017.113 0 .508.508 0 01.227.673.506.506 0 01-.673.227 6.99 6.99 0 00-6.22 0 .502.502 0 01-.22.046z"
                fill="#666"
            />
            <path
                d="M8 11.362a.504.504 0 01-.5-.5V5.29c0-.273.227-.5.5-.5s.5.227.5.5v5.58a.498.498 0 01-.5.493z"
                fill="#666"
            />
        </svg>
    )
}

export default LongTextIcon
