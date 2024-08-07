import React from 'react';
import './Button.css'
interface ButtonProps {
    children: string;
    onClick?: () => void;
    className?: string;
    type?: any
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type }) => {
    return (
        <button type={type} onClick={onClick} className={className}>{children}</button>
    );
}

export default Button;
