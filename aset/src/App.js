import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Donate from './pages/donation';
import Contact from './pages/contact';
import Nav from './components/nav';
import Events from './pages/events'; 
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (

    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

    // <>
    //   <Nav />
    //   <Hero />
    //   <About />
    //   <Card />
    //   <Footer />
    // </>
  );
}

export default App;
