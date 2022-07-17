import React from 'react';
import useColumns from '../logic/useColumns';
import { TableHeadS } from '../style';

const Top: React.FC = () => {
  const columns = useColumns();
  return (
    <TableHeadS>
      {columns.map((row: any, _id: number) => (
        <span key={`table-head_${_id}`} className='tableHeader'>
          {row.title}
        </span>
      ))}
    </TableHeadS>
  );
};

export default Top;
