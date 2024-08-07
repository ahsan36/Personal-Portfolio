import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Hero from './components/HeroSection/Hero'
// import About from './components/About/About.jsx'
import Navbar from './components/Navbar/Navbar'
import Skill from './components/Skills/Skills.jsx'
import styled from "styled-components";
// import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';     
import Contact from './components/Contact/Contact.jsx';     
import Footer from './components/Footer/Footer.jsx';     
import Projects from './components/Projects/Projects.jsx';
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import { Modal } from '@mui/material';


const Body = styled.div`
  background-color: rgb(10, 25, 47);
  width: 100%;
  overflow-x: hidden;
  z-index: 1;
`

const Wrapper = styled.div`
  background-color: rgb(10, 25, 47);
  width: 100%;
  z-index: 1;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
        <Navbar />
        <Body>
          <Hero />
          {/* <About /> */}
          <Wrapper>
            <Skill  />
            {/* <Experience /> */}
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education /> 
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
        </Body>
    </ThemeProvider>
  )
}

export default App
