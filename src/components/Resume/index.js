import React from 'react';

const Resume = () => {
  return (
    <section className='resume'>
      <div className='resume-container'>
        <div className='skills'>
          <h3>Skills</h3>
          <ul>
            <li>Full Stack Development</li>
            <li>Project Management</li>
            <li>Database Management</li>
            <li>JavaScript/Typescript</li>
            <li>Node</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/assets/resume.jpg'}
            alt='resume'
          />
          <p>
            Download <b>&#8649;</b>{' '}
            <a href={process.env.PUBLIC_URL + '/resume_.pdf'} download>
              Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
