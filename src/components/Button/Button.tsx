import React from 'react';
import './Button.css'
interface ButtonProps {
    children: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    );
}

export default Button;
