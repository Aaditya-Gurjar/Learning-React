import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag() {
  const [tag, setTag] = useState("");
 const {gif, loading, fetchData} = useGif(tag);

   
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]  '>
        <h1 className='text-xl uppercase underline font-bold'>A Random Gif </h1>
        {loading ? (<Spinner/>):(<img src={gif} alt="Random gif here" width={450} />)}
        <input type="text" 
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
        className='w-10/12 bg-white text-lg py-2 rounded-lg font-semibold mt-[10px] mb-[3px] text-center'/>
        <button onClick={()=> fetchData()} className='w-10/12 bg-white text-lg py-2 rounded-lg font-semibold mt-[15px] mb-[15px]' >GENERATE</button>
    </div>
  )
}

export default Tag