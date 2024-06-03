import { useTranslations } from 'next-intl';

const Header = () => {
    const t=useTranslations("Header");
    return <h1>{t("title")}</h1>
}

export default Header