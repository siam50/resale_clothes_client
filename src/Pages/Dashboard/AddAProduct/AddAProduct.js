import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [categories, setCategories] = useState([]);
    const [date, setDate] = useState(new Date());

    const imageHostKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handlePost = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        categoryId: data.category,
                        productName: data.productName,
                        email: user.email,
                        sellerName: user.displayName,
                        image: imgData.data.url,
                        description: data.description,
                        phone: data.phone,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        parchageYear: data.parchageYear,
                        condition: data.condition,
                        postDate: date
                    }

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Product added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }

    return (
        <div className='p-5'>
            <h2 className='text-4xl text-center'>Add Product</h2>
            <form onSubmit={handleSubmit(handlePost)}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Phone</span></label>
                        <input type="number" {...register("phone", { required: "Phone number is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" {...register("location", { required: "Location is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product name</span></label>
                        <input type="text" {...register("productName", { required: "Seller Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Resale price</span></label>
                        <input type="text" {...register("resalePrice", { required: "Seller Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Original Price</span></label>
                        <input type="text" {...register("originalPrice", { required: "Seller Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", { required: "Photo is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Year of purchase</span></label>
                        <input type="text" {...register("parchageYear", { required: "Year of purchase is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.parchageYear && <p className='text-red-600'>{errors.parchageYear?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Condition</span></label>
                        <select {...register("condition", { required: "Photo is required" })} className="select select-bordered w-full max-w-xs">
                            <option >excilent</option>
                            <option>Good</option>
                            <option>fair</option>
                        </select>
                        {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Category</span></label>
                        <select {...register("category")} className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            {
                                categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)
                            }

                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label"><span className="label-text">Description</span></label>
                        <textarea {...register("description", { required: "description is required" })} className="textarea textarea-bordered"></textarea>
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>
                </div>
                <input className='btn btn-accent w-full' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;