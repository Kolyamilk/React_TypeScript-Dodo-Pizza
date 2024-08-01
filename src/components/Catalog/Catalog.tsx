import React from 'react';
import Button from '../Button/Button';
import Menu from '../../data/menu';
import './Catalog.css'
interface ButtonProps {
    children?: string;
    className?: string;
}

interface Pizza {
    name: string;
    img: string;
    price: number;
    ingredients: string[];
}
const Catalog: React.FC<ButtonProps> = ({ children }) => {
    return (
        <main>
            <section className='catalog-pizza'>
                <h2 className='title'>{children}</h2>

                {Menu.Pizza.map((pizza: Pizza, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={pizza.img} alt={pizza.name} /></picture>
                            <div className="product-title">
                                <a href="">{pizza.name}</a>


                            </div>
                            {pizza.ingredients.join(', ')}
                        </main>
                        <footer className='product-price'>
                            <div>от {pizza.price}₽</div>
                            <Button type='submit' className='medium orange' onClick={() => { }}>Выбрать</Button>
                        </footer>
                    </article>
                ))}
            </section>
        </main >
    );
}

export default Catalog;
