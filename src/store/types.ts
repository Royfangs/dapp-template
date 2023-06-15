import type { StateCreator } from 'zustand';
import type { AppSlice } from './app';

export type StoreState = {
  app: AppSlice;
};

export type ImmerMiddlewareType = [['zustand/devtools', never], ['zustand/immer', never]];

export type SliceCreator<T> = StateCreator<StoreState, ImmerMiddlewareType, [], T>;
