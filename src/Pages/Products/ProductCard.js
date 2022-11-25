import React from 'react';

const ProductCard = ({ product, setBookingProduct }) => {
    const { image, location, originalPrice, parchageYear, phone, postDate, productName, resalePrice, sellerName, description, condition } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-7">
            <figure><img src={image} alt="/" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{productName}</h2>
                <div className='grid grid-cols-2 gap-3'>
                    <p>buying Price: ${originalPrice}</p>
                    <p>selling Price: ${resalePrice}</p>
                    <p>condition: {condition}</p>
                    <p>seller name: {sellerName}</p>
                    <p>location: {location}</p>
                    <p>phone: {phone}</p>
                    <p>Buying Year: {parchageYear}</p>
                </div>
                <p>description: {description}</p>
                <p>post Date: {postDate}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setBookingProduct(product)} htmlFor="booking-modal" className="btn btn-primary">book now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;