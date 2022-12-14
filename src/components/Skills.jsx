import React from 'react';
import react from '../../react.png';
import js from '../../js.png';
import css from '../../css.png';
import html from '../../html.png';
import GitHub from '../../GitHub.png';
import bootstrap from '../../bootstrap.png';
import axios from '../../axios.png';
import Netlify from '../../Netlify.png';

const Skills = () => {
  return (
    <div className='icons'>
      <div className='icons1'>
        <img src={react} alt="" className='icon'/>
        <img src={js} alt="" className='iconJs'/>
        <img src={css} alt="" className='icon'/>
        <img src={html} alt="" className='icon'/>
      </div>
      <div className='icons2'>
      <img src={GitHub} alt="" className='icon'/>
      <img src={bootstrap} alt="" className='icon'/>
      <img src={axios} alt="" className='icon'/>
      <img src={Netlify} alt="" className='icon'/>
      </div>
      <img src="https://www.abcpedia.com/wp-content/uploads/2015/09/codigo-binario-ceros-y-unos.gif" alt="" className='codigo'/>
    </div>
  );
};

export default Skills;