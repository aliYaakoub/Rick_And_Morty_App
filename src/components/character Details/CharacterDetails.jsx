import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import GetInfo from './../common/GetInfo';
import LocationDetail from './LocationDetail';

const CharacterDetails = (props) => {

    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const id = props.match.params.id;

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`https://rickandmortyapi.com/api/character/${id}`);
            setItem(result.data);
            console.log(result.data);
            setIsLoading(false);
        }
        fetch();
    },[id]);

    return (
        <div>
            {isLoading ? 
                <Loading />
                :
                <div className='mb-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center w-full py-5 sm:py-10'>
                        <img src={item.image} alt="" />
                        <div className='md:justify-self-start py-5'>
                            <h2 className=' text-3xl py-3'>{item.name}</h2>
                            <p className='py-3'>Gender : {item.gender}</p>
                            <p className='py-3'>Species : {item.species}</p>
                            <p className='py-3'>Origine : {item.origin.name}</p>
                            <p className='py-3'>Location : {item.location.name}</p>
                        </div>
                    </div>
                    <h1 className='w-full md:w-2/4 md:mx-auto my-10 text-2xl py-3 text-center bg-gradient-to-r from-transparent via-green-700 to-transparent'>episodes : </h1>
                    <div className='text-xl sm:text-2xl  grid grid-cols-2 align-items-center my-20'>
                        <h2 className='my-5 justify-self-end sm:pr-10 text-right'>Total number of episodes : </h2>
                        <p className='my-5 ml-10'>{item.episode.length}</p>
                        <h2 className='my-5 justify-self-end sm:pr-10'>First Episode : </h2>
                        <p className='my-5 ml-10'><GetInfo url={item.episode[0]} data={'name'} /></p>
                        <h2 className='my-5 justify-self-end sm:pr-10'>Last Episode : </h2>
                        <p className='my-5 ml-10'><GetInfo url={item.episode[item.episode.length -1]} data={'name'} /></p>
                    </div>
                    <h1 className='w-full md:w-2/4 md:mx-auto mt-10 text-2xl py-3 text-center bg-gradient-to-r from-transparent via-green-700 to-transparent'>Locations : </h1>
                    <div className='text-xl sm:text-2xl lg:px-20 grid grid-cols-1 md:grid-cols-2 justify-items-center align-items-center mt-20'>
                        <div className='w-full'>
                            <h2 className='w-full text-center py-10'>origin : </h2>
                            <LocationDetail url={item.origin.url} />
                        </div>
                        <div className='w-full'>
                            <h2 className='w-full text-center py-10'>location : </h2>
                            <LocationDetail url={item.location.url} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CharacterDetails;