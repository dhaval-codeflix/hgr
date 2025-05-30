import * as React from "react"

function AlphaNumberIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                d="M11.378 10.558a2.556 2.556 0 01-.683.111c-.667 0-1.117-.488-1.345-1.472h-.027c-.55 1.061-1.323 1.59-2.295 1.59-.728 0-1.311-.273-1.75-.823-.439-.55-.655-1.239-.655-2.072 0-.973.25-1.75.744-2.356.494-.605 1.167-.911 2.017-.911.455 0 .866.128 1.222.378.355.255.628.61.817 1.072h.022l.394-1.333h1.422l-1.188 2.955c.133.69.272 1.161.427 1.411.134.25.323.378.556.378a.85.85 0 00.333-.061l-.01 1.133zm-2.367-2.91c-.116-.629-.305-1.117-.56-1.45-.25-.34-.556-.506-.906-.506-.456 0-.822.205-1.095.61-.272.412-.394.917-.394 1.512 0 .544.105.994.344 1.361.234.367.55.544.945.544.333 0 .639-.16.91-.466.279-.317.506-.778.69-1.384l.066-.222z"
                fill="#132647"
            />
        </svg>
    )
}

export default AlphaNumberIcon
