import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [visible, setVisible]=useState(false);
    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    const setpassVisible =()=>{
        setVisible(!visible);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold my-5">Login now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                        <div className="form-control mt-6">
                           
                            <input className="btn btn-primary" type="submit" value="Login"/>
                            
                        </div>
                    </form>
                   
                    <p className='ms-5 mb-4'><small>New Here? <Link className='underline' to="/signup">Create an account</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;