import Image from "next/image";
import {useTranslations} from 'next-intl';
import {Lato, Roboto} from 'next/font/google'

const lato = Lato({subsets:['latin'], weight: "400"})
const roboto = Roboto({subsets:['latin'], weight: "400"})
export default function Index() {
  
  const t = useTranslations('Index');
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${lato.className}`}>
      <p>String number 1</p>
      <p className={roboto.className}>String number 2</p>
      <h1>{t('title')}</h1>;
    </main>
  );
}
