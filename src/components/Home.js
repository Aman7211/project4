import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
     const [movie, setMovie] = useState([]);
     useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
          .then(response => setMovie(response.data))
          .catch(error => console.error(error));
      }, []);

  return (
    <div className='bg-black p-4 '>
    <Header />
    <div className='jkl'>
    <div style={{textAlign:"center"}} className='def'>
    <h1 >TV Shows</h1>
    <ul className='abc'>
      {movie.map(show => (
        <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`} className='xyz'><img src={show?.show.image?.medium} />
           </Link><div className='ghi'>{show.show.name} </div>
        </li>
      ))}
    </ul>
  </div>
  </div>
  <Footer />
  </div>
  )
}

export default Home