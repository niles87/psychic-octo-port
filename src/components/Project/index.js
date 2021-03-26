import React from 'react';

const Project = ({ project }) => {
  return (
    <div className='tile'>
      <div
        className='tile-img'
        style={{
          backgroundImage: `URL(${process.env.PUBLIC_URL + project.img})`,
        }}
      ></div>
      <div className='tile-body'>
        <p>{project.title}</p>
      </div>
      <div className='tile-footer'>
        <a href={project.github} target='_blank' rel='noopener noreferrer'>
          Repo
        </a>
        <a href={project.application} target='_blank' rel='noopener noreferrer'>
          App
        </a>
      </div>
    </div>
  );
};

export default Project;
