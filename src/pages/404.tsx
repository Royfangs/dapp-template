import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useLang } from '@/hooks';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Custom404() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[100px] p-4 xl:flex-row">
        <div>404 page</div>
      </div>
    </main>
  );
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? 'en', ['common'])),
//   },
// });
