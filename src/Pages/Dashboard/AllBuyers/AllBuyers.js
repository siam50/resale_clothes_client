import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users/buyers')
            .then(res => res.json())
            .then(data => {
                setBuyers(data)
            })
    }, [buyers]);

    const handleDelete = buyer => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`deleted ${buyer.name} successfully`);
                }

            })
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>All Buyers</h3>
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
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleDelete(buyer)} className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;