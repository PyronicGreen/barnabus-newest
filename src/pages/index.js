import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/Experience';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/Experience/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        <Footer />
      </>  
    );
};

export default Home;