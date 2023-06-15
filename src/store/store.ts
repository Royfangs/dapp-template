import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { createAppSlice } from './app';
import type { StoreState, ImmerMiddlewareType } from './types';

export const useStore = create<StoreState, ImmerMiddlewareType>(
  devtools(
    immer((...props) => ({
      app: createAppSlice(...props),
    }))
  )
);
