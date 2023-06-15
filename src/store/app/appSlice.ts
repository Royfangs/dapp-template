import type { SliceCreator } from '@/store/types';

export type AppSlice = {
  i18n: string;
  actions: {
    setI18n: (nextI18n: string) => void;
  };
};

export const createAppSlice: SliceCreator<AppSlice> = (set) => ({
  i18n: 'en',
  actions: {
    setI18n: (nextI18n) =>
      set((state) => {
        state.app.i18n = nextI18n;
      }),
  },
});
