import React from 'react';
import {FaLinkedinIn, FaGithubAlt} from "react-icons/fa";
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithubAlt/>},

    
];

const SocialNetworks = () => {
  return (
   <section id='social-networks'>
    {socialNetworks.map((network) => (
        <a href='#' className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    )
    )}
   </section>
  )
}



export default SocialNetworks
