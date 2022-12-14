import React from 'react';
import ButtonMailto from './components/MailTo'; 
import gmail from '../gmail.gif';
import linkedin from '../linkedin.gif';
import doc from '../doc.gif'

const ContactMe = () => {
  return (
    <div className='contactForm'>
      <img src="https://www.anubis.es/wp-content/uploads/2021/07/webdisenoanubis.gif" alt="" className='pcImg'/>
      <div className="form">
        <div className='linkContact'>
          <img src={gmail} alt="" className='mail' /> <ButtonMailto className="submit" label="Write me here" mailto="mailto:girlvianney@hotmail.com" /> <br />
        </div>
        <div className='linkContact'>
          <img src={linkedin} alt="" className='mail' /> <ButtonMailto className="submit" label="Look my Lindkedin" mailto="https://www.linkedin.com/in/vianney-marcial-2b205b1a8/" /> <br />
        </div>
        <div className='linkContact'>
          <img src={doc} alt="" className='mail' /> <ButtonMailto className="submit" label="Check mi CV" mailto="mailto:girlvianney@hotmail.com" /> 
        </div>
      </div>
    </div>
  );
};

export default ContactMe;