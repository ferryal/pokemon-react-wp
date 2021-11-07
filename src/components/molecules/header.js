import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Pokedex from '../../assets/images/pokedex.png';
import { Github } from '../atoms';

const Header = () => {
  const [state, setState] = useState({ isChecked: true });
  console.log(state);
  const changeTheme = () => {
    let targetTheme = 'light';
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      targetTheme = 'dark';
      setState({
        isChecked: true,
      });
    } else {
      setState({
        isChecked: false,
      });
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
  };

  return (
    <>
      <div className="app__header">
        <div className="switch">
          <div className="toggle">
            <label htmlFor="themeSwitch">
              <input
                type="checkbox"
                name="swich-theme"
                id="themeSwitch"
                onClick={changeTheme}
                defaultChecked
              />
            </label>
            <div className="toggle-bg" />
            <div className="toggle-thumb">
              <i className="fas fa-moon" />
              <i className="fas fa-sun" />
            </div>
          </div>
        </div>
        <div className="poke__logos noselect">
          <img src={Pokedex} alt="pokelogo" className="poke__logo" />
        </div>
        <div className="pokeball__box github__icon" onClick={Github}>
          <GitHubIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
