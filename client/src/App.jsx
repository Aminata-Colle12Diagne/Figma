
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Composants/auth/SignUp'
import Login from './Composants/auth/Login'
import Home from './Composants/home/Home'
import Forgot from './Composants/auth/Forgot'
import SideBar from './Composants/sideBar/SideBar'
import Dashboard from './Composants/Dashboard/Dashboard'
import Hotels from './Composants/Hotel/Hotels';
// import AddHotels from './Composants/Hotel/AddHotels'

function App() {

  return (
   <div className='App'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/sideBar' element={<SideBar/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/hotel' element={<Hotels/>} />
      {/* <Route path='/addHotels' element={<AddHotels/>} /> */}
      <Route path='/forgot-password' element={<Forgot/>}/>

    </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
