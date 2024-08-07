import React from 'react'
import Button from '../Button/Button'
import './ModalProduct.css'
import { Pizza } from '../../data/menu'
interface ButtonProps {
    className: string;
    onClose: () => void;
    item: Pizza | null;



}

const ModalProduct: React.FC<ButtonProps> = ({ onClose, item }) => {
    // const submitHandler = (event: React.FormEvent) => {
    //     event.preventDefault()
    // }
    if (!item) {
        return null; // Возвращаем null, если item или item.name отсутствуют
    }
    console.log(item);

    return (
        <>
            <div className='modal-fade' onClick={onClose} />
            <div className='product'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25" className="close" onClick={onClose}>
                    <path fill="#fff" fillRule="evenodd" d="M9.846 12.499.553 3.205A1.878 1.878 0 0 1 3.208.55L12.5 9.843l9.291-9.29a1.878 1.878 0 0 1 2.655 2.655l-9.29 9.29 9.293 9.294a1.878 1.878 0 0 1-2.655 2.655L12.5 15.154 3.205 24.45A1.878 1.878 0 0 1 .55 21.795z" clipRule="evenodd"></path>
                </svg>
                <div className="product-image" data-size="2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <picture>
                        <img alt={item.name} title={item.name} src={item.img} data-ll-status="loaded" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="580" height="500" fill="none" viewBox="0 0 450 450">
                            <circle cx="213" cy="212" r="210" stroke="#6F6E6F" strokeDasharray="2 12.2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" opacity="2">

                            </circle>
                        </svg>
                    </picture>
                </div>
                {/* <div className="product-image__svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="450" fill="none" viewBox="0 0 450 450"><circle cx="225" cy="225" r="224" stroke="#6F6E6F" strokeDasharray="2 12.2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" opacity="0.6"></circle></svg>
                </div> */}
                <div className="product-info">
                    <h2>{item.name}</h2>

                    <p>{item.ingredients.join(', ')}</p>
                    <Button className='big orange'>В корзину за  {item.price}₽</Button>
                </div>
            </div>
        </>
    );
}

export default ModalProduct