import Navbar1 from './components/Navbar1';
import Banner1 from './components/Banner1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './components/Card1';
import Products from './components/Products';
import Firstban from './components/Firstban';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Carosel12 from './components/Carosel12';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Salepro from './components/Salepro';
import {Route,Routes } from 'react-router-dom';
import ContactUs from './components/Contact';
import Signin from './components/Signin';

/* <Navbar1 />
<Firstban />
<Card1 />
<Banner1 />
<Products/>
<Aboutus />
<Carosel12/>
<Footer /> */

const App = () => {

  return (
    <>       
    <Navbar1 />
    <Routes>
      <Route path="/" element={<>
        <Firstban />  <Card1 />  <Banner1 /> <Products/> <Aboutus /> <Carosel12/> 
      </>}></Route>
      <Route path="/products" element={<Salepro/>}></Route>
      <Route path="/about" element={<><Aboutus /> <Carosel12/></>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/sign" element={<Signin/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
