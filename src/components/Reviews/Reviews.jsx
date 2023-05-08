// import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchReviews, normalizedReviews } from 'api/moviesAPI';
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
        const result = normalizedReviews(data);
        console.log(result);
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
        reviews.map(({ id, userName, author, content, avatar }) => {
          return (
            <li key={id}>
              <div>
                <img src={avatar} alt={author} width="50" height="50" />
                <h2>{userName}</h2>
              </div>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ReviewsList>
  );
};
export default Reviews;
