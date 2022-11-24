import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handlePost = data => {
        console.log(data)
    }

    return (
        <div className='p-5'>
            <h2 className='text-4xl text-center'>Add Product</h2>
            <form className='grid grid-cols-1 lg:grid-cols-2' onSubmit={handleSubmit(handlePost)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Seller name</span></label>
                    <input type="text" {...register("sellerName", { required: "Seller Name is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-600'>{errors.sellerName?.message}</p>}
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
                <input className='btn btn-accent w-full' value="Add Product" type="submit" />
                <div>
                    {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                </div>
            </form>
            {/* <p>New to Resale Clothes? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
        </div>
    );
};

export default AddAProduct;