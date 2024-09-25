import React from 'react'
import './LoginPage.css';
export default function LoginPage() {
    return (
        <div className='parent'>
            <form>
                <div>
                    <div >
                        <h3>Login</h3>
                        <label htmlFor=""> </label>
                        <input type="email" placeholder="Enter Your Email" />

                    </div>
                    <div >
                        <label htmlFor=""> </label>

                        <input type="password" placeholder="Enter Your Password" />
                    </div>
                </div>
                
                   
                    <a href="#" className='href'> Forget Password?</a>
               
                <div>
                    <button type='submit'>Login</button>
                </div>
                <div className='register-link'>
                    <span>Don't Have An Account? <a href="./Register" className='register'>Register</a></span>
                    
                </div>
            </form>
        </div >
    )
}