import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import {ReactComponent as CloseSvg} from './img/close.svg';
import PropTypes from 'prop-types';
import {useRef} from 'react';

export const Modal = () => {
  const overlayRef = useRef(null);
  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {
          <button className={style.close}>
            <CloseSvg />
          </button>
        }
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
