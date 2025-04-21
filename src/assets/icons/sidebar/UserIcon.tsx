import * as React from "react"

function UserIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="#666">
                <path d="M9.793.336H4.206C1.78.336.333 1.783.333 4.209v5.587c0 1.873.86 3.16 2.373 3.647.44.153.947.226 1.5.226h5.587c.553 0 1.06-.073 1.5-.226 1.513-.487 2.373-1.774 2.373-3.647V4.209c0-2.426-1.446-3.873-3.873-3.873zm2.873 9.46c0 1.427-.56 2.327-1.686 2.7-.647-1.273-2.18-2.18-3.98-2.18-1.8 0-3.327.9-3.98 2.18h-.007c-1.113-.36-1.68-1.267-1.68-2.693V4.209c0-1.88.993-2.873 2.873-2.873h5.587c1.88 0 2.873.993 2.873 2.873v5.587z" />
                <path d="M7 4.336a2.39 2.39 0 000 4.78 2.39 2.39 0 000-4.78z" />
            </g>
        </svg>
    )
}

export default UserIcon
