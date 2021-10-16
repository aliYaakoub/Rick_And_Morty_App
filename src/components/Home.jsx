import React from 'react'
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwsome';

const Home = (props) => {
    return (
        <div>
            <div className='h-screen'>
                <Logo />
                <div className=' flex flex-col justify-center items-center mt-28 sm:mt-2'>
                    <h2 className='text-3xl my-5'>Search by :</h2>
                    <Link to='/characters' className='text-2xl my-5 transform hover:scale-125 transition-transform'>Characters</Link>
                    <Link to='/locations' className='text-2xl my-5 transform hover:scale-125 transition-transform'>Locations</Link>
                    <Link to='/episodes' className='text-2xl my-5 transform hover:scale-125 transition-transform'>Episodes</Link>
                </div>
            </div>
            <div className="credits py-5 bg-gray-900 flex flex-col items-center">
                <p className='py-5 text-xl sm:text-2xl'>
                    data provided by <a href="https://rickandmortyapi.com/" className='underline transform hover:scale-125 transition-transform' target='_blank' rel='noreferrer'>Rick And Morty API</a>
                </p>
                <div className='flex flex-row py-5'>
                    <a href='https://github.com/aliYaakoub' target='_blank' rel='noreferrer' >
                        <FontAwesomeIcon className='mx-5' icon={['fab','github']} size="3x" />
                    </a>
                    <a href='https://www.instagram.com/ali_yaakub/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='mx-5' icon={['fab','instagram']} size="3x" />
                    </a>
                </div>
                <p className='py-5'>
                    <FontAwesomeIcon className='mx-1' icon={['fas','code']} size="1x" /> By Ali Yaakoub
                </p>
            </div>
        </div>
    )
}

export default Home;