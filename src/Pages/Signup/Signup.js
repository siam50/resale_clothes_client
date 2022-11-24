import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignup = data => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Full name</span></label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is Required", minLength: { value: 6, message: "Password should be 6 or more" } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        {/* <label className="label"><span className="label-text">Forgot Password ?</span></label> */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">As a</span></label>
                        <select {...register("role")} className="select select-bordered w-full max-w-xs">
                            <option >buyer</option>
                            <option>seller</option>
                        </select>
                        <label className="label"></label>
                    </div>
                    <input className='btn btn-accent w-full' value="Sign up" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>Have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;