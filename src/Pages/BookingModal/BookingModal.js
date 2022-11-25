import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ bookingProduct }) => {
    const { productName, resalePrice, sellerName, description, condition } = bookingProduct;
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
    }

    return (
        <>
            <input type="checkbox" id='booking-modal' className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor='booking-modal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-primary text-center">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <p>Name</p>
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        <p>email</p>
                        <input name='email' type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        <p>Product name</p>
                        <input name='productName' type="text" defaultValue={productName} readOnly className="input input-bordered w-full" />
                        <p>Price</p>
                        <input name='price' type="text" defaultValue={resalePrice} readOnly className="input input-bordered w-full" />
                        <p>phone</p>
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full" />
                        <p>meeting location</p>
                        <input name='location' type="text" placeholder="meeting location" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;