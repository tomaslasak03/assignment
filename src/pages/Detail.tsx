import React from 'react';
import Modal from '@components/modal';
import { Navigate, useParams } from 'react-router-dom';

const Detail: React.FC = () => {
  const { id } = useParams();
  if (!id) return <Navigate to='/' replace={true} />;

  return <Modal />;
};

export default Detail;
