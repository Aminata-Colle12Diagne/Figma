import React from 'react';
import './SideBar.css';
import { BiSolidDashboard } from "react-icons/bi";
import msvg from '../assets/img/SVG.png';
import mvecteur2 from '../assets/img/Vector1.png';
import mvecteur3 from '../assets/img/Vector3.png'
import mMouhamed from '../assets/img/mouhamed.png'
import { Link } from 'react-router-dom';



function SideBar(props) {
    return (
        <div className='menu'>
            <div className="logo">
             <img src={msvg} alt="" className='icon'/>
                 <p className='text-white red'>RED PRODUCT</p> 
            </div>
            <p className='icon text-white principale'>Principale</p>
            <div className="menu-list ">
                <Link to="/dashboard" className='item'>
                <BiSolidDashboard className='icon text-white'/> 
                   <p className='paraDash pt-3 text-white'>Dashboard</p>
                </Link>

                <Link to="/hotel" className='item'>
                <img src={mvecteur2} alt=""  className='icon text-white'/>
                <p className='paraDash-2 pt-2 text-white'>Liste des hôtels </p>
                </Link>
            </div>

            <div className="Mouhamed d-flex">
            <hr  className='text-white'/>
                     <div className='imageMouhamed'>
                     <img src={mMouhamed} alt="" />
                     </div>
                     <div className='textMouhamed'>
                     <h5>Mouhamed Badiane</h5>
                     <img src={mvecteur3} alt="" /><span>en ligne</span>
                     </div>
                 </div>

        </div>
    );
}

export default SideBar;



