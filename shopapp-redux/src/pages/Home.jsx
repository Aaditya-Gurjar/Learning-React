import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner";
import Product from "../components/Product"

function Home() {
  const API_URL = "https://fakestoreapi.com/products"

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchProductData(){
    setLoading(true);
    try {
      const data = await fetch(API_URL);
      const result = await data.json();
      setPosts(result);
      setLoading(false)
      
    } catch (error) {
      console.log("Error in API call");
      setPosts([]);
    }
  }

  useEffect(()=>{
    fetchProductData()
  }, [])
  return (
    <div>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        ( posts.map((post)=>(
          <Product key={post.id} post={post}/>
        ))):
        ( <div>
          <p>No Data Found</p>
          </div> )
      }
    </div>
  )
}

export default Home