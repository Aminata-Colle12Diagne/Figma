import React, { useState } from 'react';
import './Hotels.css'
import msymbol from "../assets/img/Symbol.png"
import m3 from "../assets/img/3.png"
import mmouha from "../assets/img/mouhamed.png"
import micon from "../assets/img/white.png"
import mvecteur6 from "../assets/img/Vector6.png"

import { FaArrowRight } from "react-icons/fa";
import SideBar from '../sideBar/SideBar';
import { HiPlus } from "react-icons/hi2";

import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios';

function Hotels(props) {
    const [hotels, setHotels] = useState([]);
    const [nom, setNom] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [prix, setPrix] = useState(0);
    const [adresse, setAdresse] = useState(0);
    const [email, setEmail] = useState(0);
    const [telephone, setTelephone] = useState(0);
    const [montant, setMontant] = useState(0);


    // Fonction pour ouvrir ou fermer le modal
    const toggleModal = () => {
        setModal(!modal);
    };




const addProduct = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/addHotel', { nom, adresse, email, telephone, prix, montant, imageURL })
      .then(() => {
        setNom("");
        setAdresse("");
        setEmail("");
        setTelephone("");
        setImageURL("");
        setPrix(0);
        setMontant(0);
      })
      .catch((error) => alert(error.message));
  };

       
    // Utilisez useEffect pour récupérer les données des hôtels lors du chargement du composant
    useEffect(() => {
        axios.get('http://localhost:4000/getHotels')
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des hôtels:', error);
            });
    }, []);

    


    return (
        <div className='dashboard2'>

            <div className="col-md-3">
            <SideBar className="hotelsSidebar"/>
            </div>

            <div className="col-md-9">
            <div className="dashboard-content" style={{marginLeft: "-4.3rem", width:"90%"}}>
            <div className="div-navbar d-flex" style={{width: "116%"}}>
                <div className="frame">
                    <h3>Liste des Hotels</h3>
                </div>

<div className="group-navbar d-flex">
<div className="group-search">
<form class="">
    {/* <img src={mvecteur7} alt="" /> */}
        <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search"/>
      </form>
</div>
<div className="notification d-flex" style={{marginLeft: "15%", marginTop: "1rem"}}>
    <img src={msymbol} alt="" style={{fontSize: "3%"}} className='symbol'/>
    <img src={m3} alt="" className='image3'/>
</div>
<div className="mouha d-flex" style={{marginLeft: "2%"}}>
    <img src={mmouha} alt="" className='imageMouha'/>
    <img src={micon} alt=""  className='iconneMouha'/>
</div>
</div>

                <div className="log-out">
                    <img src={mvecteur6} alt="" className='vecteur6'/>
                    <FaArrowRight className='arrow' />

                </div>
            </div>
            <hr />
            
            <div className="row" style={{width: "116%"}}>
            <main className='hotelMain d-flex'>
                <h5 className='bienvenue nouveau'>Hôtels   8</h5>
                <button type='button ' className=' iframe-537 d-flex' onClick={toggleModal} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <HiPlus  className='plus'/>
                    <p className='btn-modal creation'>Créer un nouveau hôtel </p>
                </button>
            </main>
            </div>
            <div className="addContainer">
            <p>Créer un nouveau hôtel </p>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title" id="staticBackdropLabel">Créer un nouveau hôtel  </p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="box-header d-flex">
                     <div className="arrow-left">
                     <FaArrowLeft />
                     </div>
                     <h5 className='un'>Créer un nouveau hôtel  </h5>
                 </div>

                 <form action="" className=''>
                    <div className='mesInput d-flex g-4 ' >
                        <div className="mb-2 premiereInput">
                            <label htmlFor="">Nom de l'hôtel</label> <br />
                            <input type="text" name='nom' value={nom} placeholder='CAP Marniane' className='form-control cap' onChange={(e)=> setNom(e.target.value)}/>
                        </div>
                        <div className="mb-2 deuxemeInput">
                            <label htmlFor="">Adresse</label><br />
                            <input type="text" name='adresse'value={adresse} placeholder='Les îles du saloum, Mar Lodj' className='form-control cap' onChange={(e)=> setAdresse(e.target.value)}/>
                        </div>
                    </div>
                    <div className='mesInput d-flex  ' style={{marginTop: "3%"}}>
                        <div className="mb-2 premiereInput">
                            <label htmlFor="">Email</label> <br />
                            <input type="email" name='email'value={email} placeholder='information@gmail.com' className='form-control cap' onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-2 deuxemeInput">
                            <label htmlFor="">Numero de telephone</label><br />
                            <input type="tel" name='telephone' value={telephone} placeholder='+77 777 77 77' className='form-control cap' onChange={(e)=> setTelephone(e.target.value)}/>
                        </div>
                    </div>
                    <div className='mesInput d-flex ' style={{marginTop: "3%"}}>
                        <div className="mb-2 premiereInput">
                            <label htmlFor="">Prix par nuit</label> <br />
                            <input type="number" name='prix' value={prix} min="0" step="0.01" placeholder="25000 XOF" className='form-control cap' onChange={(e)=> setPrix(e.target.value)} />
                        </div>
                        <div className="mb-2 deuxemeInput">
                            <label htmlFor="">Devise</label><br />
                            <input type="text" id="montant" name="montant" value={montant} placeholder="Montant en XOF"  className='form-control cap' onChange={(e)=> setMontant(e.target.value)}/>
                        </div>
                    </div>
                    <label htmlFor="">Image</label>
              <input
                type="text"
            value={imageURL}
                className="form-control"
                onChange={(e)=> setImageURL(e.target.value)}
              />

             
                    
                 </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={addProduct} >Enregister</button>
      </div>
      
    </div>
  </div>
</div>
            </div>

          <div className=' global' style={{background: "#Eeeee4", width: "118%"}}>    
          <div className="row d-flex flex-wrap">
    {hotels.map(hotel => (
        <div className="col-md-3 mesCols" key={hotel.id} style={{height: "20rem"}}>
            <div className='card' >
            <div className="card-img">
    <img src={hotel.imageURL} alt={hotel.nom} className="mesImages" />
</div>

                <div className="card-body">
                    <p className='adress'>{hotel.adresse}</p>
                    <p className='nom'>{hotel.nom}</p>
                    <p>{hotel.email}</p>
                    <p>{hotel.telephone}</p>
                    <p className='motant'>{hotel.prix} {hotel.montant}</p>
                </div>
            </div>
        </div>
    ))}
</div>

      
             
              
          </div>
            </div>
            </div>
           
            
            
        </div>
    );
}

export default Hotels;






