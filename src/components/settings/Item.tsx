import React from 'react';
import { useTranslation } from 'react-i18next';
import { SetttingsItemS } from './style';
import { tableOrderCheck } from '@store';

interface ItemProps {
  title: string;
  properties: object;
  innerRef: any;
  id: number;
  checked: boolean;
}

const Item: React.FC<ItemProps> = ({ title, innerRef, properties, id, checked }) => {
  const { t } = useTranslation();

  return (
    <SetttingsItemS
      css={{
        opacity: checked ? 1 : 0.5,
      }}
      {...properties}
      ref={innerRef}
      onClick={() => {
        tableOrderCheck.getState().setCheck(id);
      }}
    >
      {t(title)}
    </SetttingsItemS>
  );
};

export default Item;
