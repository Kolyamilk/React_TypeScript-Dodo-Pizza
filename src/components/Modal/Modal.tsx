import React from 'react'
import Button from '../Button/Button'
import './Modal.css'
interface ButtonProps {
    children: string,
    onClick: () => void,
    className: string
}

const Modal: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <div className={className}>

            <div className="popup-fade"></div>
            <div className="popup-padding">
                <form>
                    <input type="text" name="" id="" />
                    <Button onClick={() => { }}>{children}</Button>
                </form>
            </div>
        </div>
    )
}

export default Modal