import React from 'react';

const API_IMG='https://image.tmdb.org/t/p/w500/'
const MovieBox =({titel,poster_path,vote_average,release_date,overview})=>{
    return(
        <>
     
        <div className='card text-center bg-s mb-3'>
            <div className='card-body'>
<img className='card-img-top' src={API_IMG+poster_path}/>
            </div>
<h1>Titel</h1>
<img src={API_IMG+poster_path}></img>
<p>{overview}</p>
        </div>
        </>
    )
}
export default MovieBox;