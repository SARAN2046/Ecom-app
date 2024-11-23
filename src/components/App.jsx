import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cards from './components/Cards';
import Banner2 from './components/Banner2';
import Carosel from './components/Carosel';
import Footer from './components/Footer';
import Bannner from './components/Bannner';


const App = () => {
  return (
   <div>
        <Navbar/>
        <Bannner/>
        <Cards/>
        <Banner2/>
        <Carosel/>
        <Footer/>    
   </div>
  )
}

export default App