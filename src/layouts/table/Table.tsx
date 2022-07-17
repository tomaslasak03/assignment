import React from 'react';
import { TableS, TableContainerS } from './style';
import { Top, Body } from './components';

const Table: React.FC = () => {
  return (
    <TableContainerS>
      <TableS>
        <Top />
        <Body />
      </TableS>
    </TableContainerS>
  );
};

export default Table;
