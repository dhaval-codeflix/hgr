import * as React from "react"

function NextArrowIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14.43 18.821c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.54-5.54-5.54-5.54a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"
                fill="currentColor"
            />
            <path
                d="M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75z"
                fill="currentColor"
            />
        </svg>
    )
}

export default NextArrowIcon
