import { useTranslation } from 'react-i18next';
import { tableOrderCheck } from '@store';

const useColumns = () => {
  const { t } = useTranslation();
  const { order } = tableOrderCheck((s) => s);
  const filterOrder = order.filter((o: any) => {
    if (o.check) {
      return true;
    }
  });

  const translateOrders = filterOrder.map((o: any) => {
    return {
      title: t(o.title),
      index: o.index,
    };
  });

  return translateOrders;
};

export default useColumns;
