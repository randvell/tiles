import style from './Photos.module.css';
import {Outlet} from 'react-router-dom';
import {Photo} from './Photo/Photo';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {fetchPhotos} from '../../../store/photos/action';

export const Photos = () => {
  const token = useSelector((state) => state.token.value);
  const photosState = useSelector((state) => state.photos);

  const canLoad =
    photosState.status === 'idle' || photosState.status === 'succeeded';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch, token]);

  const endList = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (canLoad && entries[0].isIntersecting) {
          dispatch(fetchPhotos());
        }
      },
      {
        rootMargin: '100px',
      }
    );

    const endListCurrent = endList.current;
    if (endListCurrent) {
      observer.observe(endListCurrent);
    }

    return () => {
      if (endListCurrent) {
        observer.unobserve(endListCurrent);
      }
    };
  }, [dispatch, canLoad]);

  if (photosState.error) {
    return <p>Произошла ошибка при загрузке изображений</p>;
  }

  return (
    <>
      <ul className={style.list}>
        {photosState.list.map((photoData) => (
          <Photo key={photoData.id} photoData={photoData} />
        ))}
        <li ref={endList} className={style.end}></li>
      </ul>
      <Outlet />
    </>
  );
};
