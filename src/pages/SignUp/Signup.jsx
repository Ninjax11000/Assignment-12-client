import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [visible, setVisible]=useState(false);
    const handleSignUp = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const c_password = form.cpassword.value;
        const photo = form.photo.value;

        console.log(name,email, password,c_password,photo);
    }
    const setpassVisible =()=>{
        setVisible(!visible);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-1/2">
            <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold my-5">Sign Up </h1>
               
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={visible? "text":"password"} name='password' placeholder="password" className="input input-bordered" required />
                        <i onClick={setpassVisible}>
                        {visible ? 'Hide' : 'Show'} Password</i>
                      
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" name='cpassword' placeholder="password" className="input input-bordered" required />    
                      
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                       
                        <input className="btn btn-primary" type="submit" value="Sign Up"/>
                        
                    </div>
                </form>
               
                <p className='ms-5 mb-4'><small>Have an account? <Link className='underline' to="/login">Login now!</Link> </small></p>
            </div>
        </div>
    </div>
    );
};

export default Signup;