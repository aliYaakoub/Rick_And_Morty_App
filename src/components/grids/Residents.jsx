import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CharacterCard from '../cards/CharacterCard';
import Logo from '../Logo';
import PageChange from '../common/PageChange';
import Loading from '../common/Loading';
import Notification from '../common/Notification';

const Residents = (props) => {

    const [items, setItems] = useState([]);
    const [residents, setResidents] = useState([]);
    const [merged, setMerged] = useState([]);
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [int, setInt] = useState(null); 
    const [top, setTop] = useState(-1);
    const [text, setText] = useState('');

    const id = props.match.params.id;

    
    useEffect(()=>{
        const fetch = async () => {
            const result = await axios(`https://rickandmortyapi.com/api/location/1`)
            setResidents(result.data.residents);
            
            const residentsNumbers = residents.map(resident => {
                return resident.split('/').slice(-1)
            })
            setMerged([].concat.apply([], residentsNumbers));
            setIsLoading(false);
            const result2 = await axios(`https://rickandmortyapi.com/api/character/${merged}`)
            // console.log(result);
            setItems(result2.data.results)
            setNext(result2.data.info.next)
            setPrevious(result2.data.info.prev)
        };
        fetch();
    },[id,residents])
    
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
        if(next){
            // setCurrentPage(currentPage + 1);
            onShow('page changed');
        }
        else{
            onShow('max page reached');
        }
    }
    function handlePrev(){
        if(previous){
            // setCurrentPage(currentPage - 1);
            onShow('page changed');
        }
        else{
            onShow('you are at the first page');
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
                    <div className='grid grid-cols-2 gap-5 m-5 md:grid-cols-3 lg:grid-cols-4'>
                        {items.map(item =>(
                        <CharacterCard key={item.id} item={item} />
                        ))}
                    </div>
                    <PageChange 
                        handleNext={()=>handleNext()} 
                        handlePrev={()=>handlePrev()} 
                    />
                </div>
            }
        </div>
    )
}

export default Residents;
