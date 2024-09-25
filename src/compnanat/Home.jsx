import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className='Main'>
            <h1>Home</h1>

            <button>
                <Link to={"./register"} className='btn btn-danger' type='submit' >Register</Link>

            </button>
            <button>
                <Link to={"./login"} className='btn btn-danger' type='submit'>login</Link>

            </button>

        </div>
    )
}
