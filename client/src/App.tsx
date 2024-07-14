import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import BookAppointment from './pages/BookAppointment/BookAppointment';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/service-booking' element={<BookAppointment />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
