import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null);
    return (
        <div>
            <h3 className='text-4xl text-center'>Products {products.length}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    products.map(product => <ProductCard key={product._id} product={product} setBookingProduct={setBookingProduct}></ProductCard>)
                }
            </div>
            {
                bookingProduct &&
                <BookingModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}></BookingModal>
            }
        </div>
    );
};

export default Products;