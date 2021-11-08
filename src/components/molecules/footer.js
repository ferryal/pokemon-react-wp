import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Github } from '../atoms';

const Footer = () => (
  <>
    <div className="app__footer noselect">
      <div>
        Built using
        {' '}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PokéAPI
        </a>
        ,
        {' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        {' '}
        and
        {' '}
        <a
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>
        .
      </div>
      <div onClick={Github} className="github__icon">
        <GitHubIcon />
      </div>
    </div>
  </>
);

export default Footer;
