import React from 'react';
import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';

import Avatar from '../img/eu2.png';

const sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Nathália Sardou imagem'/>
      <p className='title'>Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href='' className='btn'>Download currículo</a>
    </aside>
  )
}

export default sidebar
