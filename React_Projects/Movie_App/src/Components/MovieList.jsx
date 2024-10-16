import React, { useRef, useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId }) {
  const screenWidth=window.innerWidth;
  const [movieList, setMovieList] = useState([]);
  const elementRef=useRef(null);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const slideRight = (element) => {
    element.scrollLeft += screenWidth-110;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth-110;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className="text-[50px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute
       mt-[80px]"
      />
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className="text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            mt-[80px]"
      />

      <div ref={elementRef}
        className="flex overflow-x-auto gap-8
    scrollbar-none scroll-smooth pt-4 px-3 "
      >
        {movieList.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
