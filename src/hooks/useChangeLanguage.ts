import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { isClient } from '@/utils';

export const useChanLanguage = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return useCallback(
    (newLocale: string) => {
      const { pathname, asPath, query } = router;
      i18n.changeLanguage(newLocale);
      router.push({ pathname, query }, asPath, { locale: newLocale });
    },
    [router]
  );
};
