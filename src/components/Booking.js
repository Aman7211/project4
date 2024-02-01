import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', {
      movieId: id,
      movieName: movie ? movie.name : 'null',
      ...formData,
    });

    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));
     toast.success("Booking Details Successfully Sent, Please check the console");
    // Redirect to show details page
    navigate(`/show/${id}`);
  };

  return (
    <div className='bg-black p-4 '>
      <Header />
    <div className='bg-black' style={{minHeight:"100vh"}}>
      <h1 className='text-center text-white p-5'>Movie Booking Form</h1>
      {movie && <h1 className='text-center p-5' style={{color:"wheat"}}> {movie.name}</h1>}
      <form onSubmit={handleSubmit} className='text-center'>
        <label className='text-white' style={{fontSize:"40px"}}>
          Name :-  
          <input type="text" name="name" value={formData.name} onChange={handleChange} required  />
        </label>
        <br />
        <label className='text-white mt-5' style={{fontSize:"40px"}}>
          Email :-  
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit" className='btn  btn-warning btn-lg text-dark mt-5'>Book Ticket</button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Booking;

