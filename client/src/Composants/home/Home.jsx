import React from 'react';
import SideBar from '../sideBar/SideBar'
import Dashboard from '../Dashboard/Dashboard';
function Home(props) {
    return (
        <div className='container-fluid'>
         <div className="col-md-3">
            <SideBar/>
         </div>
         <div className="col-md-9">
            <Dashboard/>
         </div>
        </div>
    );
}

export default Home;