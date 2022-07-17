import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Theme = {
  theme: string;
  toggleTheme: () => void;
};

type Popup = {
  open: boolean;
  toggleOpen: () => void;
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

export const popStore = create<Popup>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));

const move = (from: number, to: number, arr: Array<any>) => {
  const newArr = [...arr];

  const item = newArr.splice(from, 1)[0];
  newArr.splice(to, 0, item);

  return newArr;
};

export const tableOrderCheck = create(
  devtools<Order>(
    (set) => ({
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
          const order = oldOrder.map((o, id: number) => {
            if (id === position) {
              const newOrder = o;
              newOrder.check = !o.check;
              return newOrder;
            }
            return o;
          });
          return { order };
        }),
    }),
    {
      name: 'tableOrderCheck',
    },
  ),
);
