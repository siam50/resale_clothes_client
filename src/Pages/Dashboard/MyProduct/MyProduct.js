import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const MyProduct = () => {
    const { user } = useContext(AuthContext)

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    });

    const handleDelete = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Your Product deleted successfully`);
                    refetch();
                }

            })
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>My product page</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-7'>
                {
                    myProducts.map(product => <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure><img className=' h-72' src={product.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productName}</h2>
                            <p>Price:${product.resalePrice}</p>
                            <p>Status: Availabe</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(product)} className="btn btn-error btn-sm">delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProduct;