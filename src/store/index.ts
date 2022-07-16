import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Theme = {
  theme: string;
  toggleTheme: () => void;
};

type Table = {
  data: Array<object>;
  pushData: (data: Array<object>) => void;
};

type Modal = {
  modal: object;
  setModal: (modal: object) => void;
};

export const themeStore = create<Theme>((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export const tableDataStore = create(
  devtools<Table>(
    (set) => ({
      data: [],
      pushData: (data) => set((state) => ({ data: [...state.data, ...data] })),
    }),
    {
      name: 'tableDataStore',
    },
  ),
);

export const modalDataStore = create(
  devtools<Modal>(
    (set) => ({
      modal: {},
      setModal: (modal) => set({ modal }),
    }),
    {
      name: 'tableDataStore',
    },
  ),
);
