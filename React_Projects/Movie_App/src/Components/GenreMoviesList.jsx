import React from 'react'
import GenresList from '../Constants/GenresList'
import MovieList from './MovieList'

function GenreMoviesList() {
  return (
    <div className='w-full' >
        {
            GenresList.genres.map((genre, index)=>{
               return index <= 4 && <div key={index} className='pt-5 pb-0 px-8 md:px-16'>
                        <h2 className='text-[20px] text-white 
                font-bold'>{genre.name}</h2>
                <MovieList genreId={genre.id}/>
                </div>
            })
        }
    </div>
  )
}

export default GenreMoviesList