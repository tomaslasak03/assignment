import create from 'zustand';

type Theme = {
  theme: string;
  toggleTheme: () => void;
};

type Order = {
  order: Array<any>;
  setOrder: (oldPos: number, newPos: number) => void;
  setCheck: (position: number) => void;
};

export const themeStore = create<Theme>((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

const move = (from: number, to: number, arr: Array<any>) => {
  const newArr = [...arr];
  console.log(newArr);

  const item = newArr.splice(from, 1)[0];
  newArr.splice(to, 0, item);

  return newArr;
};

export const tableOrderCheck = create<Order>((set) => ({
  order: [
    { title: 'table.mission', check: true, index: 'mission' },
    { title: 'table.rocket', check: true, index: 'rocket' },
    { title: 'table.date', check: true, index: 'date' },
    { title: 'table.reuse', check: true, index: 'reuse' },
    { title: 'table.status', check: true, index: 'status' },
  ],
  setOrder: (oldPos, newPos) =>
    set((state) => {
      const order = move(oldPos, newPos, state.order);
      return { order };
    }),
  setCheck: (position) =>
    set((state) => {
      const oldOrder = state.order;
      const checked = oldOrder.filter((o) => o.check);
      const order = oldOrder.map((o, id: number) => {
        if (id === position) {
          const newOrder = o;
          newOrder.check = o.check ? (checked.length > 2 ? false : true) : true;
          return newOrder;
        }
        return o;
      });
      return { order };
    }),
}));
