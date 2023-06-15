import { useStore } from '../store';

export const useAppActions = () => useStore((state) => state.app.actions);

export const useCurrentI18n = () => useStore((state) => state.app.i18n);
