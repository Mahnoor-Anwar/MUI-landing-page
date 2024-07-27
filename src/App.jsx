import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavbarTop from './Navbar/NavbarTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Introduction/Introduction';
import Mission from './Mission/Mission';
import Founder from './Founder/Founder';
import Trainings from './Trainings/Trainings';
import Events from './events/Evenets';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarTop />
     <Introduction mt={5}/>
     <Mission />
     <Founder />
     <Trainings />
     <Events mb={5}/> 
     <Contact mt={5}/>
     <Footer />
    </>
  )
}

export default App
