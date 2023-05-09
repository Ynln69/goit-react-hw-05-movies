import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { BackLinkBtn } from './BackLink.styled';
import { ReactComponent as ArrowIcon } from './../../images/arrow-left.svg';

const BackLink = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <BackLinkBtn to={backLinkHref.current}>
      <ArrowIcon width="25" height="25" />
      Go back to films
    </BackLinkBtn>
  );
};

export default BackLink;
