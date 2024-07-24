import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

import PreviousWork from "./components/PreviousWork";
import ServicePage from "./components/ServicePage";
import Contact from "./components/Contact";


import Accounts from "./components/Accounts";
import Login from "./authPages/login/Login";
import New from "./authPages/new/New";

import AuthPage from "./authPages/authPage/AuthPage";
import ClientHome from './authPages/clientPage/clientHome/ClientHome';  // Corrected import path
import AdminHome from './authPages/adminPage/adminHome/AdminHome';  // Corrected import path
import { AdminPrivateRoute } from './routes/AdminRoutes';
import { ClientPrivateRoute } from './routes/ClientRoutes';



//From Portfolio  
import Projects from "./components/Projects/Projects";
import "./style.css";
import Team from "./components/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Collaboration />
    </div>
  );
};


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        
        <Header />
        
        <Routes>

          <Route path="/" element={<Home />} />   

          <Route path="/accounts" element={<Accounts />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="services/:id" element={<ServicePage />} />
          <Route path="previouswork" element={<PreviousWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/software" element={<Pricing />} />
          
          {/*<Route path="/login" element={<Login />} />
          <Route path="/new" element={<New />} />
          <Route path="/authPage" element={<AuthPage />} />
          
      
    
          <Route path="/adminPage" element={
              <AdminPrivateRoute>
                <AdminHome />
              </AdminPrivateRoute>
                } />
            <Route path="/clientPage" element={
              <ClientPrivateRoute>
                <ClientHome />
              </ClientPrivateRoute>
              } /> */}

          </Routes>
      </div>

      <Routes>
      <Route path="/project" element={<Projects />} />
      </Routes>
      
      

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
