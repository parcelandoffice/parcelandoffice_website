import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    className = "",
    ...props
}) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer rounded-lg bg-accent px-6 py-3 font-semibold text-black transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;