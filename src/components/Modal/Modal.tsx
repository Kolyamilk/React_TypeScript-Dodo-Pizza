import React, { useState, useEffect } from 'react'
import './Modal.css'
import Button from '../Button/Button';


interface ButtonProps {
    children?: string;
    className?: string;
    onClose: () => void


}

const Modal: React.FC<ButtonProps> = ({ children, className, onClose }) => {
    const [inputValue, setInputValue] = useState('+7')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }
    //убрать прокрутку заднего фона при открытии модалки
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return (
        <>

            <div className='modal-fade' onClick={onClose} />

            <div className={className}>
                <form onSubmit={submitHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25" className="close" onClick={onClose}><path fill="#fff" fillRule="evenodd" d="M9.846 12.499.553 3.205A1.878 1.878 0 0 1 3.208.55L12.5 9.843l9.291-9.29a1.878 1.878 0 0 1 2.655 2.655l-9.29 9.29 9.293 9.294a1.878 1.878 0 0 1-2.655 2.655L12.5 15.154 3.205 24.45A1.878 1.878 0 0 1 .55 21.795z" clipRule="evenodd" ></path></svg>
                    <div className="sm">
                        <h3 className='title'>{children}</h3>
                        <p className='description'>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
                    </div>
                    <div className="lg">
                        <label>
                            <span className="label">Номер телефона</span>
                            <div className="input-container">
                                <input data-testid="checkout-form__phone-input" type="tel" placeholder="+7 " id="phn-input" data-error="false" data-validation="false" data-clear="false" defaultValue={inputValue} onChange={(e) => {
                                    if (e.target.value.length <= 11) {
                                        setInputValue(e.target.value);
                                    }
                                }}>
                                </input>
                            </div>
                        </label>
                    </div>
                    <div className="sm">
                        <Button type='submit' className='big' onClick={() => { }}>Выслать код</Button>
                        <div className="fz-12">Продолжая, вы соглашаетесь
                            <a href="/moscow/legal" className='legal' target="_blank"> со сбором и обработкой персональных данных и пользовательским соглашением</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Modal