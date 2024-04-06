
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function useGif(tag) {
   
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

       const[gif , setGif] = useState("");
        const [loading, setLoading] = useState(false);
        async function fetchData(){
            setLoading(true);
            const url = tag ? (tagMemeUrl) : (randomMemeUrl);
            const {data} = await axios.get(url);
            const imageSource =  data.data.images.downsized_large.url;
            setGif(imageSource);
            setLoading(false)
            
        }
        useEffect(()=>{fetchData();},[])
    
        
       
     return {gif, loading, fetchData}
}

export default useGif