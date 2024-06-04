import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Link} from '../../navigation' 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}