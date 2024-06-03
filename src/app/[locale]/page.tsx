import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function Index() {
  
  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>String number 1</p>
      <p>String number 2</p>
      <h1>{t('title')}</h1>;
    </main>
  );
}
