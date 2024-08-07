import React from 'react'
import Button from '../Button/Button'
import './ModalProduct.css'
interface ButtonProps {
    children?: string;
    className?: string;
    onClose: () => void



}
const ModalProduct: React.FC<ButtonProps> = ({ onClose, }) => {
    // const submitHandler = (event: React.FormEvent) => {
    //     event.preventDefault()
    // }
    return (
        <>

            <div className='modal-fade' onClick={onClose} />

            <div className='product' >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25" className="close" onClick={onClose}><path fill="#fff" fillRule="evenodd" d="M9.846 12.499.553 3.205A1.878 1.878 0 0 1 3.208.55L12.5 9.843l9.291-9.29a1.878 1.878 0 0 1 2.655 2.655l-9.29 9.29 9.293 9.294a1.878 1.878 0 0 1-2.655 2.655L12.5 15.154 3.205 24.45A1.878 1.878 0 0 1 .55 21.795z" clipRule="evenodd" ></path></svg>

                <div className="product-image" data-size="2" >
                    <picture data-type="pizza" className="sc-1nf33xi-0 hISjSJ">
                        <source srcSet="https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.avif 366w,https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif 584w,https://media.dodostatic.net/image/r:760x760/11EE7D612FC7B7FCA5BE822752BEE1E5.avif 760w,https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.avif 1875w" sizes="584px" />
                        <source srcSet="https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.webp 366w,https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.webp 584w,https://media.dodostatic.net/image/r:760x760/11EE7D612FC7B7FCA5BE822752BEE1E5.webp 760w,https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.webp 1875w" sizes="584px" />
                        <source srcSet="https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.png 366w,https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.png 584w,https://media.dodostatic.net/image/r:760x760/11EE7D612FC7B7FCA5BE822752BEE1E5.png 760w,https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.png 1875w" sizes="584px" />
                        <img alt="Пепперони фреш" title="Пепперони фреш" className="img" src="https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg" />
                    </picture>
                </div>
                <div className="product-image__svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="450" fill="none" viewBox="0 0 450 450"><circle cx="225" cy="225" r="224" stroke="#6F6E6F" strokeDasharray="2 12.2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" opacity="0.6"></circle></svg>
                </div>
                <div className="product-info">
                    <h2>Пицца</h2>
                    <Button type='submit' className='big orange' onClick={() => { }}>В корзину за </Button>
                </div>


            </div>
        </>
    )
}

export default ModalProduct