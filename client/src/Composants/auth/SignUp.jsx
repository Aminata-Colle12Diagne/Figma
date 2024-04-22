
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function SignUp(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectionData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();
            console.log(result);
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }
    
    
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: "#494C4F" }}>
            <div className='bg-white p-3 rounded w-30 h-90'>
                <p>Inscrivez-vous en tant que Admin</p>
                <form onSubmit={collectionData}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Entre name' autoComplete='off' name='name' value={name} className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="text" placeholder='Entre email' autoComplete='off' name='email' value={email} className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* mot de pass */}
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Entre password' autoComplete='off' name='password' value={password} className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input checbox" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label garder" htmlFor="flexCheckDefault">
                            Accepter les termes et la politique
                        </label>
                    </div>
                    <button type='submit'  className='btn  w-100 rounded-0' style={{ background: '#45484B', color: "white" }}>Registre</button>
                </form>
            </div>
            <div className='account' style={{ marginBottom: "-4%" }}>
                <p className='text-white'>Vous avez déjà un compte? </p>
                <Link to="/login" className='' style={{ color: "#FFD964", marginTop: "-2%", marginLeft: "" }}>Se connecter </Link>
            </div>
        </div>
    );
}

export default SignUp;
