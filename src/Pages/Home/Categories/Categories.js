import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://resale-clothes-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>All Categories</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5'>
                {
                    categories.map(category => <div key={category._id} className="card w-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-neutral-content">
                        <Link to={`/category/${category._id}`}>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-warning">{category.name}</h2>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;