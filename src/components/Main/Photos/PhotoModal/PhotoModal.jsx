import ReactDOM from 'react-dom';
import style from './PhotoModal.module.css';

import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';

import {ReactComponent as CloseSvg} from './img/close.svg';
import {useEffect, useRef} from 'react';
import {LikeButton} from '../../../../UI/LikeButton/LikeButton';
import formatDate from '../../../../utils/formatDate';

export const PhotoModal = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const closeModal = () => {
    navigate(`/`);
  };

  const overlayRef = useRef(null);
  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handleEsc = ({key}) => {
    if (key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const photosState = useSelector((state) => state.photos);
  const photoData = photosState.list.find((photo) => photo.id === id) || {};
  if (!photoData || !photoData.length) {
    return navigate('/');
  }

  const user = photoData.user;
  const src = photoData.urls.regular;

  const loading = false;
  const aspectRatio = photoData.width / photoData.height;

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div
        className={style.modal}
        style={{
          width: aspectRatio > 1 ? '90%' : `${aspectRatio * 90}%`,
          transition: 'width 0.3s ease',
        }}
      >
        {loading ? (
          <ClipLoader />
        ) : (
          <>
            <div className={style.imgContainer}>
              <img
                className={style.img}
                src={src}
                alt={photoData.alt_description || 'Photo'}
              />
            </div>
            <div className={style.metaContainer}>
              <div className={style.metaInfo}>
                <LikeButton
                  id={photoData.id}
                  className={style.likeButton}
                  count={photoData.likes}
                  isLiked={photoData.liked_by_user}
                  inline={false}
                />
                <p>
                  <strong>Author:</strong>{' '}
                  <a className={style.author} href={user.links.html}>
                    {user.name}
                  </a>
                </p>
                <p>
                  <strong>Date:</strong> {formatDate(photoData.created_at)}
                </p>
                <p>
                  <strong>Description:</strong> {photoData.alt_description}
                </p>
              </div>
            </div>
            <button className={style.close} onClick={closeModal}>
              <CloseSvg />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
