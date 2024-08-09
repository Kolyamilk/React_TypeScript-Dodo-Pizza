import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './ModalProduct.css'
import { Pizza } from '../../data/menu'

interface ButtonProps {
    className: string;
    onClose: () => void;
    item: Pizza | null;
}
const ModalProduct: React.FC<ButtonProps> = ({ onClose, item }) => {
    const [pizza, setPizza] = useState<Pizza | null>(item);

    if (!item || !pizza) {
        return null;
    }
    useEffect(() => {
        if (pizza) {
            handleSizeChange('medium');
        }
    }, []);


    //убрать прокрутку заднего фона при открытии модалки
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const handleSizeChange = (size: 'small' | 'medium' | 'big') => {
        if (pizza && pizza[size]) {
            setPizza({ ...pizza, ...pizza[size][0] });
        }
    };


    return (
        <>
            <div className='modal-fade' onClick={onClose} />
            <div className='product'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25" className="close" onClick={onClose}>
                    <path fill="#fff" fillRule="evenodd" d="M9.846 12.499.553 3.205A1.878 1.878 0 0 1 3.208.55L12.5 9.843l9.291-9.29a1.878 1.878 0 0 1 2.655 2.655l-9.29 9.29 9.293 9.294a1.878 1.878 0 0 1-2.655 2.655L12.5 15.154 3.205 24.45A1.878 1.878 0 0 1 .55 21.795z" clipRule="evenodd"></path>
                </svg>
                <div className="product-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <picture>
                        <img alt={item.name} title={item.name} src={pizza.img} height={pizza.height} width={pizza.width} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="580" height="500" fill="none" viewBox="0 0 450 450">
                            <circle cx="213" cy="212" r="210" stroke="#6F6E6F" strokeDasharray="2 12.2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" opacity="1">
                            </circle>
                        </svg>
                    </picture>
                </div>
                <div className="product-info">
                    <div className="">
                        <h2>{item.name}</h2>
                        <p>{item.ingredients.join(', ')}</p>
                        <div className="sc-1rpjq4r-0 FwDxs">
                            <input type="radio" name="size" onChange={() => handleSizeChange('small')} />
                            <label >Маленькая</label>
                            <input type="radio" name="size" defaultChecked onChange={() => handleSizeChange('medium')} />
                            <label >Средняя</label>
                            <input type="radio" name="size" onChange={() => handleSizeChange('big')} />
                            <label >Большая</label>
                        </div>
                        <div className="product-ingridients">
                            <span>Добавить по вкусу</span>
                            <section className='product-ingridients__item'>
                                {pizza.addToTaste && Array.isArray(pizza.addToTaste) && pizza.addToTaste.map((item, index) => (
                                    <button className='ingridient-item' key={index}>
                                        <picture className='ingridient__img'>
                                            <img src={item.img} alt={item.name} />
                                        </picture>
                                        <h2>{item.name}</h2>
                                        <span>{item.price} ₽</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="selected-icon"><path fill="#000" fillRule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" clipRule="evenodd"></path><path fill="#000" fillRule="evenodd" d="M16.602 7.864a1 1 0 0 1 .2 1.4l-4.576 6.101c-.061.082-.146.197-.23.29a1.35 1.35 0 0 1-.513.366c-.311.121-.656.121-.967 0a1.35 1.35 0 0 1-.513-.365c-.084-.094-.17-.209-.23-.29l-2.075-2.767a1 1 0 0 1 1.6-1.2l1.701 2.269 4.202-5.604a1 1 0 0 1 1.4-.2" clipRule="evenodd"></path></svg>
                                    </button>
                                ))}

                            </section>
                        </div>
                    </div>
                    <Button className='big orange'>В корзину за  {pizza.price}₽</Button>
                </div>
            </div>
        </>
    );
}
export default ModalProduct