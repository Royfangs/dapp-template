import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isXs = useMediaQuery({
    query: '(min-width: 400px)',
  });
  const isSm = useMediaQuery({
    query: '(min-width: 640px)',
  });
  const isMd = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLg = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const isXl = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const is2Xl = useMediaQuery({
    query: '(min-width: 1536px)',
  });
  const isBelowMd = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isBelowMd,
  };
};
