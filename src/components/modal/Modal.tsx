import React from 'react';
import { ModalS, ModalBackgroundS } from './style';
import { useNavigate } from 'react-router-dom';
import ModalBox from './ModalBox';

const Modal: React.FC = () => {
  const navigate = useNavigate();
  const currentTime = React.useRef(new Date().getTime());

  const closeModalHandler = () => {
    const time = new Date().getTime();
    // Prevent from insta closing modal
    if (currentTime.current + 400 < time) {
      navigate('/', { replace: true });
    }
  };

  return (
    <ModalS>
      <ModalBackgroundS onClick={closeModalHandler} />
      <ModalBox />
    </ModalS>
  );
};

export default Modal;
