import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ModalExitS } from './style';

const Exit: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ModalExitS onClick={() => navigate('/', { replace: true })}>
      <Cross2Icon />
    </ModalExitS>
  );
};

export default Exit;
