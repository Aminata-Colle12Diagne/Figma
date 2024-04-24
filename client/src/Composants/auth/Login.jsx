import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'
function Login(props) {
    
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();
    const navigate = useNavigate()

    const collectionData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/', {
                method: 'POST',
                body: JSON.stringify({email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();
            console.log(result);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: "#494C4F" }}>
            <div className='bg-white p-3 rounded w-30'>
                <p>Connectez-vous en tant que Admin</p>
                <form onSubmit={collectionData}>
    
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="text" placeholder='Entre email' autoComplete='off' name='email' className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* mot de pass */}
                    <div className="mb-3">
                        <label htmlFor="password"><strong>PassWord</strong></label>
                        <input type="password" placeholder='Entre password' autoComplete='off' name='password' className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="form-check mb-3">
                        <input className="form-check-input checbox" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label garder" for="flexCheckDefault">
                            Gardez-moi connecté
                        </label>
                    </div>
                    <button type='submit' className='btn w-100 rounded-0' style={{ background: '#45484B', color: "white" }}>Login</button>
                </form>
            </div>
           
            <Link to="/forgot-password" className='motDePass'>Mot de passe oublié?</Link>
         
            <div className='account'>
                <p className='text-white'>Vous n'avez pas de compte? </p>
                <Link to="/register" className='mb-1' style={{ color: "#FFD964",marginTop: "-2%"}}>S'inscrire</Link>
            </div>
        </div>
    );
    
    }    

export default Login;
