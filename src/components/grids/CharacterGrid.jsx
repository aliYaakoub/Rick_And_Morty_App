import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from '../cards/CharacterCard';
import Logo from '../Logo';
import PageChange from '../common/PageChange';
import Loading from '../common/Loading';
import Notification from '../common/Notification';

const CharacterGrid = (props) => {
    
    const [items, setItems] = useState([]);
    const [pagesCount, setPagesCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [int, setInt] = useState(null); 
    const [top, setTop] = useState(-1);
    const [text, setText] = useState('');

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
            setItems(result.data.results);
            console.log(result.data.results);
            console.log(result.data.info);
            setPagesCount(result.data.info.pages);
            setIsLoading(false);
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
                    <div className='grid grid-cols-2 gap-5 m-5 md:grid-cols-3 lg:grid-cols-4'>
                        {items.map(item =>(
                        <CharacterCard key={item.id} item={item} />
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
    );
}

export default CharacterGrid
