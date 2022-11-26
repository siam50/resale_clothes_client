import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>My Order</h3>
            <div className="overflow-x-auto my-7">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={booking.image} alt="/" />
                                    </div>
                                </div></td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td><button className='btn btn-sm btn-primary'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;