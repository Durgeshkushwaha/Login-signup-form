import React, { useState } from 'react'

const Authform = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>
                {isLogin ? <>
                    <div className='form'>
                        <h2>Login Form</h2>
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='password' />
                        <a href='#'>Forget Password?</a>
                        <button>Login</button>
                        <p>New User ? <a href='#' onClick={() => setIsLogin(false)}>SignUp</a></p>
                    </div>
                </> : <>
                    <div className='form'>
                        <h2>SignUp Form</h2>
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='password' placeholder='confirm Password' />
                        <button>SignUp</button>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Authform