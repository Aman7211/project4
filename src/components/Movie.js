import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch movie with ID: ${id}`);
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, [id]);

  return (
    <div className='bg-black p-4 '>
    <Header />
    <div className='jkl'>
      
    <div style={{textAlign:"center"}} className='def'>
      {movie && (
        <>
          <h1 style={{fontSize:"80px"}}>{movie.name}</h1>
          <div className='cdc '>
            <div>
          <img src={movie?.image?.original} height={"800px"} style={{borderRadius:"5%", marginLeft:"40px"}} />
          </div>
          <div>
            <h1 style={{textAlign:"left", paddingLeft:"30px",marginTop:"40px",marginLeft:"20px", textDecoration:"underline"}}>OVERVIEW</h1>
          <div className='uvw ' dangerouslySetInnerHTML={{ __html: movie.summary }} />
          </div>
         
          </div>
        </>
           )}
      <Link to={`/book/${id}`} className='text-dark text-decoration-none'><div className='btn btn-warning btn-lg px-5 p-2 ' style={{marginTop:"-350px",marginLeft:"-120px"}}>Book Movie Ticket</div></Link>
    </div>
     
   </div>
   <Footer/>
    </div>
  );
};

export default Movie;