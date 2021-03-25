import React from 'react';
import Nav from '../Nav';

const Header = (props) => {
  return (
    <header className='flex-row space-between'>
      <a href='/'>
        <h2>Niles Bingham</h2>
      </a>
      <Nav
        setCurrentSection={props.setCurrentSection}
        sections={props.sections}
        currentSection={props.currentSection}
      />
    </header>
  );
};

export default Header;
