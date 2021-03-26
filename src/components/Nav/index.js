import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {
  const { setCurrentSection, sections, currentSection } = props;
  return (
    <nav>
      <ul>
        {sections.sort().map((title) => (
          <li
            className={
              currentSection === title ? 'nav-item active' : 'nav-item'
            }
            onClick={() => setCurrentSection(title)}
            key={title}
          >
            {capitalizeFirstLetter(title)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
