import React from 'react';
import bg1 from "../assets/banner-1.jpg";
import bg2 from "../assets/banner-2.jpg";
import bg3 from "../assets/banner-3.jpg";
import bg4 from "../assets/banner-4.jpg";
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={bg1}
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute left-5 top-6 md:left-[7%] md:top-1/4 w-9/12 md:w-1/2">
                        <h1 className='text-lg md:text-5xl font-bold text-white'>Savor the Flavor: Explore Our Delicious Services</h1>
                        <p className='hidden md:block text-white text-sm md:text-lg'>We're passionate about serving up more than just a meal - we're dedicated to providing an exceptional dining experience that nourishes both body and soul. </p>
                        <button className='btn bg-red-600 text-white hover:text-red-600 hover:bg-white mt-5 rounded-2xl text-base md:text-xl'>Explore Now</button>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={bg2}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute left-1 top-6 md:left-[5%] md:top-1/4 w-full md:w-1/2">
                        <h1 className='text-xl md:text-5xl font-bold text-white'>Protecting Your Tomorrow, Today</h1>
                        <p className='hidden md:block text-white text-sm md:text-lg'>We understand that life is full of uncertainties. That's why we're dedicated to providing you with the protection and security you need to face whatever comes your way.</p>
                        <button className='btn bg-red-600 text-white hover:text-red-600 hover:bg-white mt-5 rounded-2xl text-base md:text-xl'>Explore Now</button>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={bg3}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute left-1 top-6 md:left-[5%] md:top-1/4 w-full md:w-1/2">
                        <h1 className='text-xl md:text-5xl font-bold text-white'>Banking That Works for You</h1>
                        <p className='hidden md:block text-white text-sm md:text-lg'>we're dedicated to helping you achieve your financial goals. Whether you're looking to save, invest, or borrow, we offer a wide range of banking products and services designed to meet your unique needs.</p>
                        <button className='btn bg-red-600 text-white hover:text-red-600 hover:bg-white mt-5 rounded-2xl text-base md:text-xl'>Explore Now</button>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={bg4}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute left-1 top-6 md:left-[5%] md:top-1/4 w-full md:w-1/2">
                        <h1 className='text-xl md:text-5xl font-bold text-white'>Experience the World, One Flight at a Time</h1>
                        <p className='hidden md:block text-white text-sm md:text-lg'>We're dedicated to providing you with a safe, comfortable, and enjoyable flying experience. Whether you're traveling for business or pleasure, we're committed to getting you to your destination with ease and convenience.</p>
                        <button className='btn bg-red-600 text-white hover:text-red-600 hover:bg-white mt-5 rounded-2xl text-base md:text-xl'>Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;