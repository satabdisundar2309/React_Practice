
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
    const [tag, setTag] = useState("Dog");
    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false);
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // async function fetchData(){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const output = await fetch(url)
    //     const data = await output.json();
    //     const imgSrc = data.data.images.downsized_large.url;
    //     console.log(imgSrc)
    //     setGif(imgSrc)
    //     setLoading(false)
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])
    const {gif, loading, fetchData} = useGif(tag);
    function clickHandler(){
        fetchData();
    }
  return (
    <div className="w-1/2 bg-blue-500 mb-10 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 ">
        <h1 className="text-3xl uppercase underline mt-3 font-bold">Random {tag} Gifs</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" />}
        <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />
        <button onClick={clickHandler}
        className="w-10/12 bg-white text-xl py-2 mb-[15px] rounded-lg font-bold">
            Generate
        </button>
    </div>
  )
}

export default Tag