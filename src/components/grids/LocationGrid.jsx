import React, { useState, useEffect } from 'react'
import axios from 'axios';
import LocationCard from '../cards/LocationCard'
import PageChange from '../common/PageChange';
import Logo from '../Logo';
import Loading from './../common/Loading';
import Notification from './../common/Notification';

const LocationGrid = (props) => {

    const [items, setItems] = useState([]);
    const [pagesCount, setPagesCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [int, setInt] = useState(null); 
    const [top, setTop] = useState(-1);
    const [text, setText] = useState('');

    
    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
            setItems(result.data.results);
            setPagesCount(result.data.info.pages);
            setIsLoading(false);
            console.log(result.data.results);
            // console.log(result.data.results[0].url.split('/').slice(-1));
        }
        fetch();
    },[currentPage]);

    function onShow(textValue){
        if(int){
            clearTimeout(int);
            setTop(-1);
            setInt(setTimeout(()=>{
                notify(textValue);
            },500 ))
        }
        else notify(textValue);
    }
    function notify(textValue){
        setTop(1);
        setText(textValue)
        setInt(setTimeout(()=>{
            setTop(-1);
        },3000 ))
    }

    function handleNext(){
        if(currentPage < pagesCount){
            setCurrentPage(currentPage + 1);
            onShow('page changed');
        }
        else{
            onShow('max page reached');
        }
    }
    function handlePrev(){
        if(currentPage > 1 ){
            setCurrentPage(currentPage - 1);
            onShow('page changed');
        }
        else{
            onShow('there is no page 0 :)');
        }
    }

    return (
        <div>
            {isLoading ? 
                <Loading />
                :
                <div>
                    <Notification top={top} text={text} />
                    <Logo /> 
                    <p className='w-full text-center my-5'>Page {currentPage} Of {pagesCount}</p>
                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 px-5'>
                        {items.map(item=>(
                            <LocationCard item={item} key={item.id} />
                        ))}
                    </div>
                    <PageChange 
                        currentPage={currentPage} 
                        pagesCount={pagesCount} 
                        handleNext={()=>handleNext()} 
                        handlePrev={()=>handlePrev()} 
                    />
                </div>
            }
        </div>
    )
}

export default LocationGrid;