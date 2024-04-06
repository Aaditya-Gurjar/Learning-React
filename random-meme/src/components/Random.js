import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {
    const[gif , setGif] = useState("");
    const [loading, setLoading] = useState(false);
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        const imageSource =  data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false)
        
    }
    useEffect(()=>{fetchData();},[])

    function clickHandler(){
         fetchData();
    }
  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]  '>
        <h1 className='text-xl uppercase underline font-bold'>A Random Gif </h1>
        {loading ? (<Spinner/>):(<img src={gif} alt="Random gif here" width={450} />)}
        <button onClick={clickHandler} className='w-10/12 bg-white text-lg py-2 rounded-lg font-semibold mt-[15px] mb-[15px]' >GENERATE</button>
    </div>
  )
}

export default Random