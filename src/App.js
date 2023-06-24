import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"


function App() {
  const location = useLocation();
  function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>;
  }
  function RoutesWithAnimation() {
    const location = useLocation();
  
    return (
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
      <AnimatePresence>
     <Header/>
    <LocationProvider>
      <RoutesWithAnimation/>
    </LocationProvider>
     </AnimatePresence>
     </BrowserRouter>

    </div>
  );
}

export default App;
