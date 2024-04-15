import React from 'react';
import './Dashboard.css'
import mvecteur7 from "../assets/img/Vector7.png"
import msymbol from "../assets/img/Symbol.png"
import m3 from "../assets/img/3.png"
import mmouha from "../assets/img/mouhamed.png"
import micon from "../assets/img/white.png"
import mEnvelopp from "../assets/img/envelopp.png"
import mUtilisateur from "../assets/img/utilisateur.png"
import mvecteur6 from "../assets/img/Vector6.png"
import mvecteur5 from "../assets/img/Vector5.png"
import mvecteur4 from "../assets/img/Vector4.png"
import { FaArrowRight } from "react-icons/fa";
import SideBar from '../sideBar/SideBar';

function Dashboard(props) {
    return (
        <div className='dashboard '>
          
           <div className="col-md-3">
           <SideBar />
           </div>
           <div className="col-md-9">
           <div className="dashboard-content" style={{marginLeft: "-5rem", width:"90%"}}>
            <div className="div-navbar d-flex" style={{width: "117%"}}>
                <div className="frame">
                    <h3>Dashboard</h3>
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
            
            <div className="row">
            <main className='premierMain'>
                <h4 className='bienvenue'>Bienvenue sur RED Product</h4>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur</p>
            </main>
            </div>
           <div className="row-global">
           <div className="row deuxiemeMain g-4 p-2" style={{background: "#Eeeee4", width: "123%"}}>
                <div className="col-md-3 d-flex main-1 "style={{marginLeft: "2%"}}>
                    <div className='envelopp'>
                        <img src={mEnvelopp} alt="" className='imageEnvelopp'/>
                    </div>
                    <div className='formulaire ' style={{marginLeft: "2%", paddingTop: '5%'}}>
                        <h4 className='clas125'>125 <span className='clasSpan'>Formulaires</span></h4>
                        <p className='clasSmall' style={{marginTop: "-3%"}}>Je ne sais pas quoi mettre</p>
                    </div>

                </div>

                <div className="col-md-3 d-flex main-1" style={{marginLeft: "2%"}}>
                    <div className='envelopp' style={{background: "#0CC2AA"}}>
                        <p className='text-white' imageEnvelopp>P</p>
                        {/* <img src={mEnvelopp} alt="" className='imageEnvelopp'/> */}
                    </div>
                    <div className='formulaire ' style={{marginLeft: "2%", paddingTop: '5%'}}>
                        <h4 className='clas125'>40 <span className='clasSpan'>Messages</span></h4>
                        <p className='clasSmall' style={{marginTop: "-3%"}}>Je ne sais pas quoi mettre</p>
                    </div>

                </div>

                <div className="col-md-3 d-flex main-1"style={{marginLeft: "2%"}}>
                    <div className='envelopp' style={{background: "#FCC100"}}>
                        <img src={mUtilisateur} alt="" className='imageEnvelopp'/>
                    </div>
                    <div className='formulaire ' style={{marginLeft: "2%", paddingTop: '5%'}}>
                        <h4 className='clas125'>600 <span className='clasSpan'>Utilisateurs </span></h4>
                        <p className='clasSmall'>Je ne sais pas quoi mettre</p>
                    </div>

                </div>
            </div>
            {/* row2 */}
            <div className="row deuxiemeMain g-4 p-2" style={{background: "#Eeeee4", width: "123%"}}>
                <div className="col-md-3 d-flex main-1 "style={{marginLeft: "2%"}}>
                    <div className='envelopp'style={{background: "#F90000"}}>
                        <img src={mEnvelopp} alt="" className='imageEnvelopp'/>
                    </div>
                    <div className='formulaire ' style={{marginLeft: "2%", paddingTop: '5%'}}>
                        <h4 className='clas125'>25 <span className='clasSpan'>E-mails</span></h4>
                        <p className='clasSmall' style={{marginTop: "-3%"}}>Je ne sais pas quoi mettre</p>
                    </div>

                </div>

                <div className="col-md-3 d-flex main-1" style={{marginLeft: "2%"}}>
                    <div className='envelopp'style={{background: "#9C27B0"}}>
<p className='text-white imageEnvelopp'>
    P</p>                    </div>
                    <div className='formulaire ' style={{marginLeft: "2%", paddingTop: '5%'}}>
                        <h4 className='clas125'>40 <span className='clasSpan'>Hôtels </span></h4>
                        <p className='clasSmall' style={{marginTop: "-3%"}}>Je ne sais pas quoi mettre</p>
                    </div>

                </div>

                <div className="col-md-3 d-flex main-1"style={{marginLeft: "2%"}}>
                    <div className='envelopp'style={{background: "#1565C0"}}>
                        <img src={mUtilisateur} alt="" className='imageEnvelopp'/>
                    </div>
                    <div className='formulaire ' style={{marginLeft: "2%", paddingTop: '5%'}}>
                        <h4 className='clas125'>02 <span className='clasSpan'>Entités </span></h4>
                        <p className='clasSmall'>Je ne sais pas quoi mettre</p>
                    </div>

                </div>
            </div>
           </div>
            </div>
           </div>
        </div>
    );
}

export default Dashboard;