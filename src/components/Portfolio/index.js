import React from 'react';
import { projects } from '../../utils/projects';
import Project from '../Project';

const Portfolio = () => {
  return (
    <section className='container'>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
