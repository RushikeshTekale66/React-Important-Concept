import React, { useState } from 'react';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : " "} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? "active" : ''} onClick={() => setIsLogin(false)}>Signup</button>
                </div>
                {isLogin ? <>
                    <div className='form'>
                        <h2>Login Fom</h2>
                        <input type='text' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <a href='#'>Forget Password</a>
                        <button>Login</button>
                        <p>Not a menmber? <a href='#' onClick={()=>setIsLogin(false)}>Signup Now</a></p>
                    </div>
                </> : <>
                <div className='form'>
                        <h2>SignUp Fom</h2>
                        <input type='text' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='password' placeholder='Conferm Password' />
                        <button>Signup</button>
                        <p>Not a menmber? <a href='#' onClick={()=>setIsLogin(true)}>Login Now</a></p>
                    </div>
                </>
                }
            </div>
        </div>
    )
}