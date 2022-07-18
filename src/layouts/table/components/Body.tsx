import React from 'react';
import { TableBodyS, TableRowS, TableLoading } from '../style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { query } from '../logic/query';
import { useQuery } from 'urql';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { tableOrderCheck, themeStore } from '@store';
import SyncLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';

const Body: React.FC = () => {
  const navigate = useNavigate();
  const { order } = tableOrderCheck((s) => s);
  const [offset, setOffset] = React.useState<number>(0);
  const [tableData, setTableData] = React.useState<Array<object>>([]);
  const [{ data, error, fetching }] = useQuery({ query, variables: { offset: offset * 20 } });
  const loadFunc = () => {
    setOffset(offset + 1);
  };

  React.useEffect(() => {
    if (data?.launchesPast) {
      setTableData((prev) => [...prev, ...data.launchesPast]);
    }
  }, [data]);

  return (
    <TableBodyS>
      <InfiniteScroll
        loader={<></>}
        dataLength={tableData.length}
        next={loadFunc}
        hasMore={data?.launchesPast.length === 0 ? false : true}
      >
        {tableData.map((row: any, _id: number) => (
          <TableRowS onClick={() => navigate(`/${row.id}`)} key={`table-body_${_id}`}>
            {order.map((item: any, __id: number) => (
              <React.Fragment key={`table_body_item_${__id}_row_${_id}`}>
                {item.index === 'mission' && (
                  <span className='tableBodyItem'>{row.mission_name}</span>
                )}
                {item.index === 'rocket' && (
                  <span className='tableBodyItem'>{row.rocket.rocket_name}</span>
                )}
                {item.index === 'date' && <DateItem date={row.launch_date_local} />}
                {item.index === 'reuse' && (
                  <span className='tableBodyItem'>
                    {row.rocket.first_stage.cores[0].core.reuse_count}
                  </span>
                )}
                {item.index === 'status' && (
                  <StatusItem status={!!row.rocket.first_stage.cores[0].land_success} />
                )}
              </React.Fragment>
            ))}
          </TableRowS>
        ))}
        {fetching && (
          <TableLoading>
            <Loader />
          </TableLoading>
        )}
        {error && (
          <TableLoading>
            <Loader />
          </TableLoading>
        )}
      </InfiniteScroll>
    </TableBodyS>
  );
};

const DateItem = ({ date }: { date: string }) => {
  const d = new Date(date),
    dDay = d.getDate(),
    dMonth = d.getMonth() + 1,
    dYear = d.getFullYear();
  return (
    <span className='tableBodyItem'>{`${dDay < 10 ? '0' + dDay : dDay} : ${
      dMonth < 10 ? '0' + dMonth : dMonth
    } : ${dYear}`}</span>
  );
};

const StatusItem = ({ status }: { status: boolean }) => {
  return <span className='tableBodyIcon'>{status ? <CheckIcon /> : <Cross2Icon />}</span>;
};

const Loader = () => {
  const { theme } = themeStore((s) => s);
  return <SyncLoader color={theme === 'light' ? '#000' : '#fff'} size={30} />;
};

export default Body;
