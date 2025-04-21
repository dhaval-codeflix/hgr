import * as React from "react"

function GroupIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                <path d="M8 6.716a1.946 1.946 0 01-1.94-1.94c0-1.067.873-1.94 1.94-1.94s1.94.873 1.94 1.94-.873 1.94-1.94 1.94zm0-2.88a.939.939 0 100 1.88.939.939 0 100-1.88zM4.527 13.17a1.946 1.946 0 01-1.94-1.94c0-1.068.873-1.94 1.94-1.94s1.94.872 1.94 1.94c0 1.066-.873 1.94-1.94 1.94zm0-2.88a.939.939 0 100 1.88.939.939 0 100-1.88zM11.473 13.17a1.946 1.946 0 01-1.94-1.94c0-1.068.873-1.94 1.94-1.94s1.94.872 1.94 1.94c0 1.066-.867 1.94-1.94 1.94zm0-2.88a.939.939 0 100 1.88.939.939 0 100-1.88z" />
            </g>
        </svg>
    )
}

export default GroupIcon
