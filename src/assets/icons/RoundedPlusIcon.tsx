import * as React from "react"

function RoundedPlusIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                <path d="M10.666 8.5H5.333a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h5.333c.274 0 .5.227.5.5s-.226.5-.5.5z" />
                <path d="M8 11.17a.504.504 0 01-.5-.5V5.335c0-.273.227-.5.5-.5s.5.227.5.5v5.333c0 .274-.227.5-.5.5z" />
            </g>
        </svg>
    )
}

export default RoundedPlusIcon
