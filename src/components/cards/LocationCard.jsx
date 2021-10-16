import React from 'react';
// import { Link } from 'react-router-dom';

const LocationCard = ({item}) => {
    // console.log(result.data.results[0].url.split('/').slice(-1));

    // const residents = item.residents;
    // console.log(residents);
    // const residentsNumbers = residents.map(resident => {
    //     return resident.split('/').slice(-1)
    // })
    // console.log(residentsNumbers);
    // const merged = [].concat.apply([], residentsNumbers);
    // console.log(merged);

    return (
        // <Link to={`/location-Residents/${item.id}`}>
            <div className='relative text-xl py-5 rounded-xl shadow-2xl cardBG text-black overflow-hidden'>
                {/* <h2 className='text-2xl py-2 text-center'>{item.episode}</h2> */}
                <div className="grid grid-cols-2 items-center">
                    <strong className='justify-self-end'>Name :</strong>
                    <h2 className='p-2'> {item.name}</h2>
                    <strong className='justify-self-end'>Dimension : </strong>
                    <p className='p-2'> {item.dimension}</p>
                    <strong className='justify-self-end'>Type : </strong>
                    <p className='p-2'> {item.type}</p>
                    <strong className='justify-self-end'>Residents : </strong>
                    <p className='p-2'> {item.residents.length}</p>
                </div>
                {/* <p className='text-center py-2 absolute bottom-0 left-0 w-full bg-black text-white'>click to see all the residents</p> */}
            </div>
        // </Link>
    )
}

export default LocationCard;