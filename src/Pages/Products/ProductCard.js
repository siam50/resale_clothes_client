import React from 'react';

const ProductCard = ({ product, setBookingProduct }) => {
    const { image, location, originalPrice, parchageYear, phone, postDate, productName, resalePrice, sellerName, description, condition } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-7">
            <figure><img className='h-72' src={image} alt="/" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{productName}</h2>
                <p>Seller Name: <strong>{sellerName}</strong></p>
                <div className='grid grid-cols-2 gap-3'>
                    <p>Buying Price: <strong>${originalPrice}</strong></p>
                    <p>Selling Price: <strong>${resalePrice}</strong></p>
                    <p>Condition: <strong>{condition}</strong></p>
                    <p>Location: <strong>{location}</strong></p>
                    <p>Phone: <strong>{phone}</strong></p>
                    <p>Buying Year: <strong>{parchageYear}</strong></p>
                </div>
                <p>Description: {description}</p>
                <p>Post Date: {postDate}</p>
                <div className="card-actions flex justify-between items-center mt-3">
                    <button className='btn btn-sm btn-warning'>Report to Admin</button>
                    <label onClick={() => setBookingProduct(product)} htmlFor="booking-modal" className="btn btn-primary">book now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;