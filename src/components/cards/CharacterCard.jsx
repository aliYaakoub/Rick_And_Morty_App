import React from 'react'
import { Link } from 'react-router-dom';

const CharacterCard = ({item}) => {

    function handleStatus(status){
        if(status=== 'Alive'){
            return 'w-3 h-3 rounded-full bg-green-500';
        }
        if(status === 'Dead'){
            return 'h-3 w-3 rounded-full bg-red-500'
        }
        if(status === 'unknown'){
            return 'h-3 w-3 rounded-full bg-gray-500'
        }
    }

    return (
        <Link to={`/characterDetails/${item.id}`}>
            <div className='card bg-gray-700 flex flex-col rounded-xl overflow-hidden cursor-pointer'>
                <img src={item.image} alt="" className='' />
                <div className='py-1 pl-2 flex flex-col relative items-center justify-center'>
                    <h1 className='text-xl sm:text-3xl sm:my-2'>{item.name}</h1>
                    <div className='flex flex-row items-center mb-10'>
                        <span className={handleStatus(item.status)}></span>
                        <h1 className='sm:text-xl mx-2'>{item.status} - {item.species}</h1>
                    </div>
                    {/* <h1 className='sm:text-xl text-gray-300 sm:my-2'>Gender : <span className='text-white'>{item.gender}</span></h1>
                    <h1 className='sm:text-xl text-gray-300 sm:my-2'>Origin : <span className='text-white'>{item.origin.name}</span></h1>
                    <h1 className='sm:text-xl text-gray-300 sm:my-2 pb-10'>Epidodes : <span className='text-white'>{item.episode.length}</span></h1> */}
                    <p className='absolute bottom-0 left-0 w-full sm:text-xl py-1 text-center bg-gray-500'>click for more Info</p>
                </div>
            </div>
        </Link>
    )
}

export default CharacterCard;
