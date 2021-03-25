import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { ImStackoverflow } from 'react-icons/im';
import { RiCopyrightLine } from 'react-icons/ri';
const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p>
        <RiCopyrightLine />
        {currentYear()} niles87
      </p>
      <div>
        <a
          href='https://github.com/niles87'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GoMarkGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/niles-bingham/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GrLinkedin />
        </a>
        <a
          href='https://stackoverflow.com/users/12208077/niles87'
          target='_blank'
          rel='noopener noreferrer'
        >
          <ImStackoverflow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
