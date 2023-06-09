import { useState } from 'react';
import './App.css'
import './index.css';
//importing darkmode
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/DarklMode/Themes'
import { easeIn, motion } from 'framer-motion';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import {
  Home,
  Projects,
  Techs,
  SetUp,
  Footer
} from './sections/index.js'
const App = () => {
  //implementing dark mode
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const icon = theme === "light" ? < FiMoon size={35} /> : < FiSun size={35} />;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Button
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: easeIn }}
          style={{
            justifyContent: theme === 'light' ? 'flex-end' : 'flex-start'
            , transition: theme && '0.8s'
          }}
          onClick={themeToggler}>{icon}</Button>
        <Home
          //passing down darkmode theme. 
          theme={theme}
        />
        <Projects theme={theme} />
        <Techs theme={theme} />
        <SetUp theme={theme} />
        <Footer theme={theme} />

      </div >
    </ThemeProvider >
  );
}
const Button = styled(motion.button)`
  position: absolute;
  display: flex;
      z-index: 3;
      top: 10px;
      outline:none;
      border:none;
      left: 10px;
       width: 3.6rem;
      background: ${({ theme }) => theme.buttonBg};
      color: ${({ theme }) => theme.sunMoon};
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0.6rem;
      position: fixed;
      `;
export default App;
