// import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchReviews } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ErrorMessege } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchReviews(movieId);
        const data = response.data.results;
        const result = data.map(({ id, author, content, author_details }) => {
          return {
            id,
            author,
            content,
            avatar: `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`,
          };
        });

        setReviews(result);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching reviews');
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsList>
      {!reviews.length ? (
        <ErrorMessege>There are no reviews yet</ErrorMessege>
      ) : (
        reviews.map(({ id, author, content, avatar }) => {
          return (
            <li key={id}>
              <img src={avatar} alt={author} />
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ReviewsList>
  );
};
export default Reviews;
