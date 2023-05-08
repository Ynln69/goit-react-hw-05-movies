import Notiflix from 'notiflix';
import { fetchReviews, normalizedReviews } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ErrorMessege } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchReviews(movieId);
        const data = response.data.results;
        const result = normalizedReviews(data);

        setReviews(result);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching reviews');
      }
    };

    getReviews();
  }, [movieId]);

  const toggleExpand = index => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <ReviewsList>
      {!reviews.length ? (
        <ErrorMessege>There are no reviews yet</ErrorMessege>
      ) : (
        reviews.map(({ id, userName, author, content, avatar }, index) => {
          const truncatedContent =
            content.length > 150 ? content.slice(0, 150) + '...' : content;
          return (
            <li key={id}>
              <div>
                <img src={avatar} alt={author} width="50" height="50" />
                <h2>{userName}</h2>
              </div>
              <p onClick={() => toggleExpand(index)}>
                {index === expandedIndex ? content : truncatedContent}
              </p>
            </li>
          );
        })
      )}
    </ReviewsList>
  );
};
export default Reviews;
