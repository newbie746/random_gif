import React  from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import Spinner from './Spinner';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(true);

    async function fetchData() {
        setLoading(true);
        const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        const {data} = await axios.get(tag ? url :randomMemeUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect (()=>{
        fetchData();
    },[])


    return{gif, loading, fetchData};


}
export default useGif;