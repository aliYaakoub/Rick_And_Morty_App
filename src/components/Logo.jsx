import React from 'react'
import logo from '../imgs/Rick_and_Morty.png';

const Logo = (props) => {
    return (
        <div id='header' className='w-full flex items-center justify-center'>
            <img src={logo} alt='' className="w-3/4 sm:w-2/4 md:w-2/5 my-5" />
        </div>
    )
}

export default Logo;