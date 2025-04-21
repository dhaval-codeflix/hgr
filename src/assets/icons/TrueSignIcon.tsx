import * as React from "react"

function TrueSignIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.604 4.819a.5.5 0 010 .707l-5.67 5.66a.5.5 0 01-.708 0l-2.83-2.83a.5.5 0 11.708-.708l2.476 2.477 5.317-5.307a.5.5 0 01.707 0z"
                fill="#fff"
            />
        </svg>
    )
}

export default TrueSignIcon
