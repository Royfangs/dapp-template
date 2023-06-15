import Head from 'next/head';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home } from '@/core/features';

type Props = {
  // Add custom props here
};

export default function HomePage() {
  return <Home />;
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
