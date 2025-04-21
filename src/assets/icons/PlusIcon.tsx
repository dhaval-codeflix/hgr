import * as React from "react"

function PlusIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="currentColor">
                <path d="M12 8.5H4a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h8c.273 0 .5.227.5.5s-.227.5-.5.5z" />
                <path d="M8 12.5a.504.504 0 01-.5-.5V4c0-.273.227-.5.5-.5s.5.227.5.5v8c0 .273-.227.5-.5.5z" />
            </g>
        </svg>
    )
}

export default PlusIcon
