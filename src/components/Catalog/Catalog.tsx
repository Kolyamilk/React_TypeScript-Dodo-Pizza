import React, { useState } from 'react';
import Button from '../Button/Button';
import Menu from '../../data/menu';
import ModalProduct from '../Modal/ModalProduct';
import './Catalog.css'
interface ButtonProps {
    children?: string;
    className?: string;
}

const Catalog: React.FC<ButtonProps> = () => {
    const [modalProduct, setModalProduct] = useState(false)
    return (
        <main className='catalog'>
            <section className='catalog-products'>
                <h2 className='title'>Пиццы</h2>
                {Menu.Pizza.map((pizza, key: number) => (
                    <article key={key} className='product-block'
                        onClick={() => {
                            setModalProduct(true)

                        }}

                        onChange={() => { }}>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={pizza.img} alt={pizza.name} /></picture>
                            <div className="product-title">
                                <a href="">{pizza.name}</a>
                            </div>
                            {pizza.ingredients.join(', ')}
                        </main>
                        <footer className='product-price__block'>
                            <div>от {pizza.price} ₽</div>
                            <Button type='submit' className='medium opacity'>Выбрать</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
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
            <section className='catalog-products'>
                <h2 className='title'>Закуски</h2>
                {Menu.Snacks.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>Выбрать</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Коктейли</h2>
                {Menu.Cocktails.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Кофе</h2>
                {Menu.Coffee.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Напитки</h2>
                {Menu.Cocktails.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Десерты</h2>
                {Menu.Cocktails.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Любят дети</h2>
                {Menu.Cocktails.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Соусы</h2>
                {Menu.Cocktails.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            <section className='catalog-products'>
                <h2 className='title'>Другие товары</h2>
                {Menu.Cocktails.map((item, key: number) => (
                    <article key={key} className='product-block'>
                        <main className='product-block__desc'>
                            <picture className='product-img'><img src={item.img} alt={item.name} /></picture>
                            <div className="product-title">
                                <a href="">{item.name}</a>
                            </div>
                            {item.description}
                        </main>
                        <footer className='product-price__block'>
                            <div className='price__control'>
                                {item.price} ₽
                                <div className='priceOld__control'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                            <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                            </path>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <Button type='submit' className='medium opacity' onClick={() => { }}>В корзину</Button>
                        </footer>
                    </article>
                ))}
            </section>
            {modalProduct && <ModalProduct className='product' onClose={() => setModalProduct(false)}></ModalProduct>}
        </main >
    );
}
export default Catalog;
