import React from 'react'
import './RegisterPage.css'


export default function RegisterPage() {
    return (
        <div className='card'>
            <form action="">
                <h1>Register</h1>
                <div className='inputbox'>
                    <input type="text" placeholder='First Name' required />
                </div>
                <div className='inputbox'>
                    <input type="text" placeholder='Last Name' required />
                </div>
                <div className='inputbox'>
                    <input type="email" placeholder='Email' required />
                </div>
                <div className='inputbox'>
                    <input type="Password" placeholder='Password' required />
                </div>
                <div className='inputbox'>
                    <input type="Password" placeholder='Confirm Password' required />
                </div>
                <button type='submit'>Register</button>
                <div className='LogIn-link'>
                    <p> Have Account ? <a href='#'>Login Now</a></p>
                </div>
            </form>
        </div>
    )
}
