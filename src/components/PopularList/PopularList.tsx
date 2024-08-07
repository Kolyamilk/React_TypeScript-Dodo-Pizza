import React from 'react'
import './PopularList.css'
const PopularList = () => {
    return (
        <section className='popular'>
            <h2 className='popular_title'>Часто заказывают</h2>
            <div className='popular_block'>
                <article>
                    <picture >
                        <img alt="Додстер" title="Додстер" className="img" src="https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.jpg" />
                    </picture>
                    <div className='popular-item__desc'>
                        <h2>Додстер</h2>
                        <div>219 ₽</div>
                    </div>
                </article>
                <article>
                    <picture>
                        <img alt="Додстер" title="Додстер" className="img" src="https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif" />
                    </picture>
                    <div className='popular-item__desc'>
                        <h2>Пепперони фреш</h2>
                        <div>от 329 ₽</div>
                    </div>
                </article>
                <article>

                    <picture >
                        <img alt="Додстер" title="Додстер" className="img" src="https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.jpg" />
                    </picture>
                    <div className='popular-item__desc'>
                        <h2 >3 пиццы</h2>
                        1&nbsp;239 ₽
                        <div >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                    <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                    </path>
                                </svg>
                                1&nbsp;697 ₽
                            </span>
                        </div>

                    </div>
                </article>
                <article>
                    <picture >
                        <img alt="Додстер" title="Додстер" className="img" src="https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.jpg" />
                    </picture>
                    <div className='popular-item__desc'>
                        <h2 >2 соуса</h2>
                        1&nbsp;239 ₽
                        <div className="">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 75 10" className="discount">
                                    <path stroke="#FF6900" strokeWidth="2" d="M1 9c7.346-1.833 34.434-7.5 73-8" opacity="0.55">
                                    </path>
                                </svg>
                                1&nbsp;697 ₽
                            </span>
                        </div>
                    </div>

                </article>

            </div>
        </section>
    )
}

export default PopularList