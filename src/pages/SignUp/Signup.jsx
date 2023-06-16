import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [visible, setVisible] = useState(false);



    const handleSignUp = data => {
       console.log(data);
    }
    const setpassVisible = () => {
        setVisible(!visible);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold my-5">Sign Up </h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"{...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={visible ? "text" : "password"}
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/

                                    })}

                                name='password' placeholder="password" className="input input-bordered" />
                            <i onClick={setpassVisible}>
                                {visible ? 'Hide' : 'Show'} Password</i>

                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be min 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have at least one uppercase, one lower case, a special caharcter</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" {...register("cpassword", { required: true })} name='cpassword' placeholder="password" className="input input-bordered"  />
                            {errors.password?.type === 'required' && <p className='text-red-600'> Comfirm Password is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} name='photo' placeholder="Photo Url" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>

                    <p className='ms-5 mb-4'><small>Have an account? <Link className='underline' to="/login">Login now!</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;