import React from 'react';

const AboutMe = () => {
  return (
    <>
      <div className='aboutMe'>
        <div className='description'>
          <h4> <h2>Hi I'm Vianney!</h2> <br />
            <h4 className='me'>
            Full Stack Web Developer <br /> <br />
            I love to respond to new challenges of continuous demand, where I can put my skills into practice. It's amazing to work with people from other countries and continents, I like different projects and I have something new to contribute.
            <br /> My experience and path has been in the private public sector and teaching where I have built my professional skills such as leadership, discipline, innovation and desire to keep learning every day.
            </h4>
          </h4>
        </div>
        <div className='study'>
          <h6>Estudios</h6>
          <ul>
            <li>
              <img src=".//academl1.png" alt="" className='iconStudy'/>
              Web Development
            </li>
            <li>
              <img src=".//cnci.png" alt="" className='iconStudy'/>
              Master in Administration and Finance
            </li>
            <li>
              <img src=".//uv.png" alt="" className='iconStudy'/>
              Bachelor's Degree in Economics
            </li>
            <li>
              <img src=".//google.png" alt="" className='iconStudy'/>
              Google Certified Educator
            </li>
            <li>
              <img src=".//sep.png" alt="" className='iconStudy' />
              Online Teacher
            </li>
          </ul>
        </div>
        <div className='aboutImg'>
          <img src="https://pysong-dev.web.app/assets/images/others/web.gif" alt=""/>
        </div>
      </div>
    </>
  );
};

export default AboutMe;