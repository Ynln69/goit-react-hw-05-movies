import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Link, Header } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
