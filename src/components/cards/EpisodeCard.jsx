import React from 'react'

const EpisodeCard = ({item}) => {
    return (
        <div className='relative text-xl py-5 rounded-xl shadow-2xl cardBG text-black overflow-hidden'>
            <h2 className='text-2xl py-2 text-center'>{item.episode}</h2>
            <div className="grid grid-cols-2 items-center">
                <strong className='justify-self-end'>Episode's Name :</strong>
                <h2 className='p-2'> {item.name}</h2>
                <strong className='justify-self-end'>Air Date : </strong>
                <p className='p-2'> {item.air_date}</p>
                <strong className='justify-self-end'>characters : </strong>
                <p className='p-2 '> {item.characters.length}</p>
            </div>
            {/* <p className='text-center py-2 absolute bottom-0 left-0 w-full bg-black text-white'>click to see all the characters</p> */}
        </div>
    )
}

export default EpisodeCard;