import React from 'react';
import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';
import ButtonDownload from './ButtonDownload';

import Avatar from '../img/eu2.png';

const sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Nathália Sardou imagem'/>
      <p className='title'>Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <ButtonDownload/>
    </aside>
  )
}

export default sidebar
