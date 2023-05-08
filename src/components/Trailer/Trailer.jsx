import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import { fetchTrailerVideo } from 'api/moviesAPI';
import { ErrorMessege } from 'components/Reviews/Reviews.styled';

const Trailer = () => {
  const [showModal, setShowModal] = useState(true);
  const [video, setVideos] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getTrailerVideo = async () => {
      try {
        const {
          data: { results },
        } = await fetchTrailerVideo(movieId);

        setVideos(results[0]);

        return video;
      } catch (e) {
        console.error(e);
        Notiflix.Notify.failure('Error fetching reviews');
      }
    };
    getTrailerVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <Modal onClose={closeModal}>
          {!video ? (
            <ErrorMessege>Oops there're no video to this movie</ErrorMessege>
          ) : (
            <iframe
              width="680"
              height="400"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Trailer;
