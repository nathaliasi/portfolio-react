import{AiFillPhone,AiOutlineMail, AiTwotoneEnvironment} from 'react-icons/ai';

import '../styles/components/informationcontainer.sass'

import React from 'react'

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Celular</h3>
                <p>(22)99898-2554</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>nathaliatrab@outlook.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiTwotoneEnvironment id='location-icon' />
            <div>
                <h3>Nova Friburgo RJ</h3>
            </div>
        </div>

    </section>
  )
}

export default InformationContainer
