import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader';
import css from './Layout.module.css';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    background-color: #555;
  }
`;

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.navigation}>
          <StyledLink to="/" className={css.listItem}>
            Home
          </StyledLink>
          <StyledLink to="/movies" className={css.listItem}>
            Movies
          </StyledLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Layout;
