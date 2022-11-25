import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users/sellers')
            .then(res => res.json())
            .then(data => {
                setSellers(data)
            })
    }, [sellers]);

    const handleDelete = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`deleted ${seller.name} successfully`);
                }

            })
    }
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>All Sellers</h3>
            <div className="overflow-x-auto my-7">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handleDelete(seller)} className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;