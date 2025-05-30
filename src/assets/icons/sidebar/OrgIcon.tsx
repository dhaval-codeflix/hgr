import * as React from "react"

function OrgIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
                <path d="M8.666 15.17H3.333c-1.613 0-2.5-.887-2.5-2.5V7.335c0-1.613.887-2.5 2.5-2.5h3.333c.274 0 .5.227.5.5v7.333c0 1.054.447 1.5 1.5 1.5.274 0 .5.227.5.5 0 .274-.226.5-.5.5zM3.333 5.835c-1.053 0-1.5.447-1.5 1.5v5.333c0 1.054.447 1.5 1.5 1.5h3.2c-.24-.393-.367-.893-.367-1.5V5.836H3.333z" />
                <path d="M6.666 5.83H3.333a.504.504 0 01-.5-.5V3.998c0-1.013.82-1.833 1.833-1.833H6.74c.153 0 .3.073.393.193a.509.509 0 01.087.434c-.04.146-.054.313-.054.54v2c0 .273-.226.5-.5.5zm-2.833-1h2.333v-1.5-.166h-1.5a.834.834 0 00-.833.833v.834zM9.333 9.17a.504.504 0 01-.5-.5V5.335c0-.273.227-.5.5-.5s.5.227.5.5v3.333c0 .274-.227.5-.5.5zM12 9.17a.504.504 0 01-.5-.5V5.335c0-.273.227-.5.5-.5s.5.227.5.5v3.333c0 .274-.227.5-.5.5zM12 15.17H9.333a.504.504 0 01-.5-.5v-2.667c0-.64.527-1.167 1.167-1.167h1.333c.64 0 1.167.527 1.167 1.167v2.666c0 .274-.227.5-.5.5zm-2.167-1H11.5v-2.167a.165.165 0 00-.167-.167H10a.165.165 0 00-.167.167v2.166zM4 11.83a.504.504 0 01-.5-.5V8.665c0-.273.227-.5.5-.5s.5.227.5.5v2.667c0 .273-.227.5-.5.5z" />
                <path d="M12.667 15.17h-4c-1.613 0-2.5-.887-2.5-2.5V3.335c0-1.613.887-2.5 2.5-2.5h4c1.613 0 2.5.887 2.5 2.5v9.333c0 1.614-.887 2.5-2.5 2.5zm-4-13.334c-1.053 0-1.5.447-1.5 1.5v9.333c0 1.054.447 1.5 1.5 1.5h4c1.053 0 1.5-.446 1.5-1.5V3.336c0-1.053-.447-1.5-1.5-1.5h-4z" />
            </g>
        </svg>
    )
}

export default OrgIcon
