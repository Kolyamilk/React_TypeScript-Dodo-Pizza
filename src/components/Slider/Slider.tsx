import React from 'react'
import imageArray from '../StoriesList/image';
import './Slider.css'


import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const image = imageArray as string[];
    const settings = {
        className: "center",
        infinite: false,

        slidesToShow: 6.25,
        swipeToSlide: true,
        speed: 100,


    };
    return (

        <>


            <SlickSlider {...settings}>
                {image.map((image, index) => (
                    <div className="slider-item">
                        <div className="slider-item__image">
                            <img src={image} key={index} alt={`фото ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </SlickSlider >


            {/* <div className="slider">
                <div className="slider-wrap">
                    {image.map((image, index) => (
                        <div className="slider-item">
                            <div className="slider-item__image">
                                <img src={image} key={index} alt={`фото ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            {/* {image.map((image, index) => (
                <img src={image} key={index} alt={`фото ${index + 1}`} />
            ))} */}
        </>
    );
}

export default Slider;

