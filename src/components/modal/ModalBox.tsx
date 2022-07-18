import React from 'react';
import { useQuery } from 'urql';
import { Navigate, useParams } from 'react-router-dom';
import { query } from './query';
import { ModalBoxS, ModalContentS, ModalLoadingComponentS } from './style';
import SyncLoader from 'react-spinners/ClipLoader';
import { themeStore } from '@store';
import { useTranslation } from 'react-i18next';
import Content from './Content';
import Exit from './Exit';

const ModalBox: React.FC = () => {
  const { id } = useParams();
  const [{ data, fetching, error }] = useQuery({ query });

  const modalData = data?.launchesPast;
  let isMatch;

  if (!fetching && modalData) {
    isMatch = modalData.filter((item: any) => {
      if (item.id === id) return true;
    });

    if (isMatch.length === 0) return <Navigate to='/' replace={true} />;
  }

  return (
    <ModalBoxS>
      <ModalContentS>
        <Exit />
        {fetching && <Loader />}
        {error && <Error />}
        {isMatch && isMatch.length > 0 && <Content data={isMatch[0]} />}
      </ModalContentS>
    </ModalBoxS>
  );
};

const Loader = () => {
  const { theme } = themeStore((s) => s);
  return (
    <ModalLoadingComponentS>
      <SyncLoader color={theme === 'light' ? '#000' : '#fff'} size={60} />
    </ModalLoadingComponentS>
  );
};

const Error = () => {
  const { t } = useTranslation();
  return (
    <ModalLoadingComponentS>
      <h1>{t('error')}</h1>
    </ModalLoadingComponentS>
  );
};

export default ModalBox;
