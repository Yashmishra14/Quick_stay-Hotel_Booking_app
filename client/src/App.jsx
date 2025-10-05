import React from "react";
import Navbar from './component/Navbar.jsx'
import{Route,Routes, useLocation} from "react-router-dom"
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Hotel from './pages/hotel.jsx';
import RoomDetail from './pages/roomDetail.jsx';
import Booking from './pages/booking.jsx';
import Bookings from './pages/bookings.jsx';
import Contact from './pages/contact.jsx';
import Experience from './pages/experience.jsx';

function App() {
const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
        <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hotels' element={<Hotel />} />
          <Route path='/rooms/:id' element={<RoomDetail />} />
          <Route path='/booking/:id' element={<Booking />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>

        </div>
    </>

  )
}

export default App
