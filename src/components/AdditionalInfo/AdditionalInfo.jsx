import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import css from './AdditionalInfo.module.css';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  color: var(--color-text);

  &.active {
    color: var(--color-hover);
  }
`;

const AdditionalInfo = () => {
  return (
    <section className={css.additionalInfo}>
      <h2 className={css.title}>Additional information</h2>
      <ul>
        <li className={css.listItem}>
          <StyledLink to="cast" className={css.additionalInfoLink}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" className={css.additionalInfoLink}>
            Reviews
          </StyledLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default AdditionalInfo;
