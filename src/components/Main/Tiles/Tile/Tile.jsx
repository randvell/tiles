import style from './Tile.module.css';
import propTypes from 'prop-types';

export const Tile = ({src}) => {
  console.log();
  return (
    <li className={style.tile}>
      <img className={style.img} src={src} />
    </li>
  );
};

Tile.propTypes = {
  src: propTypes.string,
};
