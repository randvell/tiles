import style from './Header.module.css';

import Layout from '../Layout';
import Logo from './Logo';
import Auth from './Auth';
import PropTypes from 'prop-types';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Auth />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
};
