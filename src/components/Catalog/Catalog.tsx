import React from 'react';
import Button from '../Button/Button';
import Menu from '../../data/menu';
import './Catalog.css'
interface ButtonProps {
    children?: string;
    className?: string;
}


const Catalog: React.FC<ButtonProps> = () => {


    return (
        <main>
            <section className='catalog-pizza'>
                <h2 className='title'>Пиццы</h2>
                {Menu.Pizza.map((pizza, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={pizza.img} alt={pizza.name} /></picture>
                            <div className="product-title">
                                <a href="">{pizza.name}</a>
                            </div>
                            {pizza.ingredients.join(', ')}
                        </main>
                        <footer className='product-price__block'>
                            <div>от {pizza.price} ₽</div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>Выбрать</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-pizza'>
                <h2 className='title'>Комбо</h2>
                {Menu.Combo.map((combo, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={combo.img} alt={combo.name} /></picture>
                            <div className="product-title">
                                <a href="">{combo.name}</a>
                            </div>
                            {combo.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {combo.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>
                                        {combo.priceOld} ₽
                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>Выбрать</Button>
                        </footer>
                    </article>
                ))}
            </section>
        </main >
    );
}

export default Catalog;
