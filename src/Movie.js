import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars />
      <ReviewList reviews={reviews} />
      <ReviewForm onAddReview={addReview} />
    </div>
  );
};

export default Movie;
