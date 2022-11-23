import React from 'react';

const Banner = () => {
    return (
        <div className="hero my-6 lg:my-8" style={{ backgroundImage: `url("http://st.depositphotos.com/1003633/2284/i/450/depositphotos_22848360-Fashion-clothes-hang-on-a-hanger.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Resale Clothes</h1>
                    <p className="mb-5">Recycling is more than just a response to the environmental crisis and has assumed a symbolic role in beginning to change the nature of western societies and the culture of consumerism.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;