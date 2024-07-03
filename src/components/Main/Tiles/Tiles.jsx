import style from './List.module.css';
import {Outlet} from 'react-router-dom';

export const Tiles = () => {
  console.log();

  return (
    <>
      <ul className={style.list}></ul>
      <Outlet />
    </>
  );
};
