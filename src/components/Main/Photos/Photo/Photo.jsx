import {useNavigate} from 'react-router-dom';
import style from './Photo.module.css';
import propTypes from 'prop-types';
import {LikeButton} from '../../../../UI/LikeButton/LikeButton';
import formatDate from '../../../../utils/formatDate';

export const Photo = ({photoData}) => {
  const navigate = useNavigate();

  const user = photoData.user;
  const id = photoData.id;
  const src = photoData.urls.small;
  const handlePhotoClick = () => {
    navigate(`/photos/${id}`);
  };

  return (
    <li className={style.tile}>
      <img
        className={style.img}
        src={src}
        alt={photoData.alt_description || 'Photo'}
        onClick={handlePhotoClick}
      />
      <LikeButton
        id={photoData.id}
        className={style.likeButton}
        count={photoData.likes}
        isLiked={photoData.liked_by_user}
      />
      <div className={style.meta}>
        <a className={style.author} href={user.links.html}>
          {user.name}
        </a>
        <p className={style.date}>{formatDate(photoData.created_at)}</p>
      </div>
    </li>
  );
};

Photo.propTypes = {
  photoData: propTypes.object.isRequired,
  onLike: propTypes.func,
};
