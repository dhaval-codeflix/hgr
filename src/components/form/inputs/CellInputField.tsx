import React from 'react';

interface CellInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const CellInputField: React.FC<CellInputFieldProps> = ({
    className = '',
    ...props
}) => {
    return (
        <>
            <input
                size={props.value?.toString().length}
                className={`disabled:cursor-not-allowed focus:outline-none focus:w-full bg-transparent rounded-sm px-1 border-[1px]
                  border-transparent hover:border-solid-basic-neutral-200 focus:border-solid-basic-neutral-200 
                  read-only:hover:border-transparent read-only:focus:border-transparent ${className}`}
                {...props}
            />
        </>
    );
}

export default CellInputField;
