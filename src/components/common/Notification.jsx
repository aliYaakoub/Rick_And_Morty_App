import React,{useState, useEffect} from 'react';

const Notification = (props) => {

    const top = props.top;

    const [topAttribute, setTopAttribute]  = useState('');

    useEffect(() => {
        if(top === -1){
            setTopAttribute('-top-80');
        }
        else{
            setTopAttribute('top-5');
        }        
    }, [top])


    return (
        <div className={`notification fixed ${topAttribute} flex items-center justify-center md:text-xl rounded-xl right-5 z-50 bg-black p-10`}>
            <p>{props.text}</p>
        </div>
    )
}

export default Notification;