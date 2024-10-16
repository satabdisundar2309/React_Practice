import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


function Slider() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const screenWidth=window.innerWidth;
  const [moviesList, setMoviesList] = useState([]);
  const elementRef=useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      // console.log(resp.data.results);
      setMoviesList(resp.data.results);
    });
  };
  const sliderRight = (element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft = (element)=>{
    element.scrollLeft-=screenWidth-110
  }

  return (
    <div>
    <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer " onClick={()=>{sliderLeft(elementRef.current)}}/>
    <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>{sliderRight(elementRef.current)}} />
        <div className="flex overflow-x-auto gap-3 w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
      {moviesList.map((movie, index) => {
        return (
          <img key={index}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top rounded-md hover:border-[3px] border-gray-300 transition-all duration-100 ease-in-out"
          />
        );
      })}
    </div>
    </div>
  );
}

export default Slider;
