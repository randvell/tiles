import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {changeLike} from '../../store/photos/action';
import {authString} from '../../api/auth';

export const LikeButton = ({id, className, isLiked, count, inline = true}) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.value);

  const handleLike = () => {
    if (!token) {
      window.location.href = authString;
    }

    dispatch(changeLike({id, isLiked: !isLiked}));
  };

  return (
    <button className={className} onClick={handleLike}>
      {`${isLiked ? '❤️' : '🤍'} ${inline ? '' : 'Like'} ${count}`}
    </button>
  );
};

LikeButton.propTypes = {
  id: PropTypes.string,
  inline: PropTypes.bool,
  className: PropTypes.string,
  isLiked: PropTypes.bool,
  count: PropTypes.number,
};
