import { useState } from 'react';
import Popular_CLass from "./Popular-Class/Popular_CLass";

import Top_Slider from "./Top-Slider/Top_Slider";
import './HomeContents.css';
import Benefits from './Benefits/Benefits';
import Popular_Instructors from './Popular-Instructors/Popular_Instructors';

const HomeContents = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`container-full ${isDarkTheme ? 'dark-theme':'light-theme'}`}>
      <Top_Slider />
      <button onClick={handleToggleTheme}>Change Theme</button>
      <Popular_CLass />
      <Popular_Instructors></Popular_Instructors>
      <Benefits></Benefits>
      
      
    </div>
  );
};

export default HomeContents;
