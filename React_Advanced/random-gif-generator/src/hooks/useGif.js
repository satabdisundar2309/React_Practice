import React from 'react'
import { useState, useEffect } from 'react';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const RandomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
        const [gif, setGif] = useState('')
        const [loading, setLoading] = useState(false);
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        async function fetchData(){
            setLoading(true)
            const output = await fetch(tag? `${RandomGifUrl}&tag=${tag}` : RandomGifUrl)
            const data = await output.json();
            const imgSrc = data.data.images.downsized_large.url;
            setGif(imgSrc)
            setLoading(false)
        }
        useEffect(()=>{
            fetchData()
        },[])

        return {gif, loading, fetchData};
}

export default useGif