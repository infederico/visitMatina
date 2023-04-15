import Layout from "./components/Layout/Layout";
//import Reviews from "./components/common/Reviews/Reviews";

import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import AventurasDelCaribe from './components/pages/AventurasDelCaribe/AventurasDelCaribe';
import FincaMandira from './components/pages/FincaMandira/FincaMandira';
import FincaLaParcela from './components/pages/FincaLaParcela/FincaLaParcela';
import RestaurantSolYLuna from './components/pages/RestaurantSolYLuna/RestaurantSolYLuna';
import HospedajeClaroDeLuna from './components/pages/HospedajeClaroDeLuna/HospedajeClaroDeLuna';
import Paquetes from './components/pages/Paquetes/Paquetes';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/aboutUs" element={ <AboutUs/> } />
        <Route path="/AventurasDelCaribe" element={ <AventurasDelCaribe /> } />
        <Route path="/fincaMandira" element={ <FincaMandira /> } />
        <Route path="/fincaLaParcela" element={ <FincaLaParcela /> } />
        <Route path="/restaurantSolyLuna" element={ <RestaurantSolYLuna /> } />
        <Route path="/hopedajeClaroDeLuna" element={ <HospedajeClaroDeLuna /> } />
        <Route path="/paquetes" element={ <Paquetes /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/contacto" element={ <Contact/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </Layout>
  );
};

export default App;
