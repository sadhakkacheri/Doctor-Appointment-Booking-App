import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Myappointment from './pages/Myappointment';
import Contact from './pages/Contact';
import About from "./pages/About";
import Profile from "./pages/Profile";
import Appointment from "./pages/Appointment";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
     <div className='mx-3 sm:mx-[10%]'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/doctors' element={<Doctors/>}></Route>
          <Route path='/doctors/:speciality' element={<Doctors/>}></Route>
          <Route path='/my-appointments' element={<Myappointment/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/my-profile' element={<Profile/>}></Route>
          <Route path='/appointment/:docID' element={<Appointment/>}></Route>
        </Routes>
        <Footer/>
     </div>
  )
}

export default App;