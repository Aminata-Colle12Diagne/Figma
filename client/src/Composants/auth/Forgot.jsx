import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importez axios si vous décidez de l'utiliser pour la requête POST
import './Login.css'

function Forgot(props) {
    
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const collectionData = async (e) => {
        e.preventDefault();
        try {
            // Utilisez axios ou continuez d'utiliser fetch pour la requête POST
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();
            console.log(result);
            navigate('/login');
        } catch (error) {
            console.error(error);
            // Gestion des erreurs ici
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: "#494C4F" }}>
            <div className='bg-white p-3 rounded w-30'>
                <h6>Mot de passe oublié?</h6>
                <p className='entrez'>Entrez votre adresse e-mail ci-dessous et <br/> nous vous envoyons des instructions sur la <br/>façon de modifier votre mot de passe.</p>
                <form onSubmit={collectionData}>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="text" placeholder='Entre email' autoComplete='off' name='email' className='form-control rounded-0'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn w-100 rounded-0' style={{ background: '#45484B', color: "white" }}>Send</button>
                </form>
            </div>
            <p className='motDePass text-white'>Revenir à la <Link to="/login" className='linkConnexion'>connexion</Link></p>
        </div>
    );
}

export default Forgot;
