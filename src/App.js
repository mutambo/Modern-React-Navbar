import React  from 'react';
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
}from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Testimonial from './Pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
const App =()=> {
  return (
    <Router>
    <Navbar/>
      <main>
       <Routes>
        <Route path = '/' element= {<Home />}></Route>
        <Route path = 'About' element= {<About />}></Route>
        <Route path = 'Contact' element= {<Contact />}></Route>
        <Route path = 'Services' element= {<Services/>}></Route>
        <Route path = 'Testimonial' element= {<Testimonial/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
