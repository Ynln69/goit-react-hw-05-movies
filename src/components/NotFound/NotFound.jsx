import BackLink from 'components/BackLink/BackLink';
import NotFoundImg from '../../images/not-found.png';
import { NotFoundBox } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <BackLink />
      <NotFoundBox>
        <h1> Ops, page not found :( </h1>
        <img src={NotFoundImg} alt="" width="500" />
      </NotFoundBox>
    </>
  );
};

export default NotFound;
