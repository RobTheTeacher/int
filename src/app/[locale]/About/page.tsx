
import { useTranslations } from 'next-intl';
import Header  from '@/components/Header';
const About = () => {

    const t = useTranslations('About');
    return (<>
        <h1>{t('string1')}</h1>
        <Header />
    </>
    )
}

export default About