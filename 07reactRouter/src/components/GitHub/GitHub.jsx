import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Aaditya-Gurjar")
    //     .then(res => res.json())
    //     .then(data=>{console.log(data)
    //         setData(data);
    //     })
    // }, [])
  return (

    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xl '>GitHub Public Repos :{data.public_repos} 
    <img src={data.avatar_url}  width={300} alt="Git Profile Picture" />
    </div>
  )

}

export default GitHub;

export const GitHubDataLoader = async() => {
    const response = await fetch("https://api.github.com/users/Aaditya-Gurjar");
    return response.json();


}