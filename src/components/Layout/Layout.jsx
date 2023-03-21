import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HiFilm } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { Header, Link, P, Footer, Section } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">
            <AiOutlineHome />
            Home
          </Link>
          <Link to="/movies">
            <HiFilm /> Movies
          </Link>
        </nav>
      </Header>
      <Section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
      <Footer>
        <P>
          &copy; 2023 Tetiana Kramarenko
          <br />
          All rights reserved.
        </P>
      </Footer>
    </>
  );
};
