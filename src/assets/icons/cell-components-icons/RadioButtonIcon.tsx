import * as React from "react"

function RadioButtonIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                d="M7.053 10.388a.5.5 0 01-.353-.147L4.813 8.354a.503.503 0 010-.706.503.503 0 01.707 0L7.053 9.18l3.427-3.427a.503.503 0 01.707 0 .503.503 0 010 .707l-3.78 3.78a.5.5 0 01-.354.147z"
                fill="#666"
            />
        </svg>
    )
}

export default RadioButtonIcon
