import React, { use }  from 'react'
import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    // const [tag, setTag]=useState('cat');
    // const [gif,setgif]=useState('');
    // const [loading,setLoading]=useState(true);

    // async function fetchData() {
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setgif(imageSource);
    //     setLoading(false);
    // }

    // useEffect (()=>{
    //     fetchData();
    // },[])

    const[tag,setTag]=useState('cat');

    const{gif,loading,fetchData}=useGif(tag);

    function clickHandler(){
       fetchData();
    }

  return (
    <div className='w-1/2  flex flex-col rounded-lg border-2 border-gray-500
     bg-blue-400 items-center gap-y-5 mt-[15px]'>

        <h1 className='text-3xl underline uppercase font-bold'
        >Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }

        <input 
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" 
        onChange={(event) => setTag(event.target.value)} 
        value={tag}
        type="text"/>


        <button className='w-10/12 opacity-80 bg-white/70 hover:opacity-100
        tranistion-all duration-300 ease-in-out mb-2
        rounded-lg text-xl font-semibold py-2 uppercase text-black '
        onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Tag