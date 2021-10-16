import React, { useState, useEffect } from 'react'
import axios from 'axios';
import LocationCard from '../cards/LocationCard'

const LocationDetail = ({url}) => {

    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(url);
            setItem(result.data);
            console.log(result.data);
            // console.log(result.data.results[0].url.split('/').slice(-1));
        }
        fetch();
    },[url]);

    return (
        <div className='grid grid-cols-1  w-full justify-items-center px-5'>
            <div className='relative text-xl py-5 w-full h-full rounded-xl shadow-2xl cardBG text-black overflow-hidden'>
                <div className="grid grid-cols-2 items-center ">
                    <strong className='justify-self-end'>Name :</strong>
                    <h2 className='p-2'> {item.name}</h2>
                    <strong className='justify-self-end'>Dimension : </strong>
                    <p className='p-2'> {item.dimension}</p>
                    <strong className='justify-self-end'>Type : </strong>
                    <p className='p-2'> {item.type}</p>
                </div>
            </div>
        </div>
    )
}

export default LocationDetail;