import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3 className='text-3xl text-center'>All Categories</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5'>
                {
                    categories.map(category => <div key={category.id} className="card w-96 bg-neutral text-neutral-content">
                        <Link to={`/category/${category.id}`}>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-warning">{category.name}</h2>
                                {/* <p>{category.tag}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/category/${category.id}`}><button className="btn btn-primary">See Products</button></Link>
                            </div> */}
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;