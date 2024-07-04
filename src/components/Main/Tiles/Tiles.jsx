import style from './Tiles.module.css';
import {Outlet} from 'react-router-dom';
import {Tile} from './Tile/Tile';

export const Tiles = () => {
  const tiles = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1692117162315-35dad308ebf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    },
    {
      src: 'https://images.unsplash.com/photo-1719921462717-06a2e551d388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    },
    {
      src: 'https://images.unsplash.com/photo-1719943071246-36880df28062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1692117162315-35dad308ebf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    },
    {
      src: 'https://images.unsplash.com/photo-1719921462717-06a2e551d388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    },
    {
      src: 'https://images.unsplash.com/photo-1719943071246-36880df28062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <ul className={style.list}>
        {tiles.map((tile, i) => (
          <Tile key={i} src={tile.src} />
        ))}
      </ul>
      <Outlet />
    </>
  );
};
