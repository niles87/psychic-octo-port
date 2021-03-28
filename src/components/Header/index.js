import React from 'react';
import Nav from '../Nav';

const Header = (props) => {
  return (
    <header className='flex-row'>
      <h2>Niles Bingham</h2>

      <Nav
        setCurrentSection={props.setCurrentSection}
        sections={props.sections}
        currentSection={props.currentSection}
      />
    </header>
  );
};

export default Header;
