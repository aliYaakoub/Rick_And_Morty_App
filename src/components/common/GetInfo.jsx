import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GetInfo = ({url, data}) => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(url);
            setItems(result.data);
        }
        fetch();
    })
    
    return (
        <span>
            {items[data]}
        </span>
    );
}

export default GetInfo;
