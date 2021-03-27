import React from 'react';

const Resume = () => {
  return (
    <section className='resume'>
      <div>
        <h3>Skills</h3>
        <p>Full Stack Development</p>
        <p>Project Management</p>
        <p>Database Management</p>
      </div>
      <p>
        Download <b>&#8649;</b>{' '}
        <a href={process.env.PUBLIC_URL + '/resume_.pdf'} download>
          Resume
        </a>
      </p>
    </section>
  );
};

export default Resume;
