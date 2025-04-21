import * as React from "react"

function ExportIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                d="M16.94 8.898c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H9.24c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12.5 14.997V3.617M15.85 5.85L12.5 2.5 9.15 5.85"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ExportIcon
