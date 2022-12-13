import React from 'react';

const Home = () => {
  return (
    <div className='me'> 
      <div className='name'>
        <div className='title'>
          <h1 className='animated-shadow'>Vianney Marcial</h1>
      </div>
      </div>
      <div className='work'>
        <h1 className='t-stroke t-shadow-halftone'>Web Developer</h1>
      </div>
      <div>
        <figure>
          <img src="../mail.gif" alt="" className='iconContact'/>
          <figcaption className='figContact'>girlvianney@hotmail</figcaption>
        </figure>
        <figure>
          <img src="../../cel.gif" alt="" className='iconContact'/>
          <figcaption className='figContact'>5527225874</figcaption>
        </figure>
        <figure>
          <img src="../../in.gif" alt="" className='iconContact'/>
          <figcaption className='figContact'> <a href="https://www.linkedin.com/in/vianney-marcial-2b205b1a8/" target={"_blank"}> Click here </a> </figcaption>
        </figure>
      </div>
      <div className='contact'>
      </div>
      <img src="https://static.wixstatic.com/media/c1c513_346d223ffaf44355886928b740e9f9cc~mv2.gif" alt="" className='homeImg'/>
      <div>
      </div>
    </div>
  );
};

export default Home;