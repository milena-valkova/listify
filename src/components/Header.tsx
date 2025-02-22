import { useState, useEffect, use } from 'react';
import { Typography, Layout, Dropdown } from 'antd';
import { GlobalOutlined, AlignRightOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { LanguageProps } from '../context/types';
import { AppContext } from '../context/AppContext';

const { Header } = Layout;
const { Title } = Typography;

const items: MenuProps['items'] = [
  {
    label: 'English',
    key: 'en',
    icon: <span role="img">🇬🇧</span>
  },
  {
    label: 'Български',
    key: 'bg',
    icon: <span role="img">🇧🇬</span>
  },
  {
    label: 'Español',
    key: 'es',
    icon: <span role="img">🇪🇸</span>
  },
];

const AppHeader = () => {
  const { i18n, t } = useTranslation();
  const defaultLanguage = items.find((lan) => lan?.key === i18n.language) as LanguageProps;
  const [currentLanguage, setCurrentLanguage] = useState<LanguageProps>(defaultLanguage);  
  const context = use(AppContext);
  const { colorDark } = context;

  useEffect(() => {
    const onChangeLanguage = (lng: string) => {
      setCurrentLanguage(items.find((item) => item?.key === lng) as LanguageProps);
    };

    i18n.on('languageChanged', onChangeLanguage);

    return () => {
      i18n.off('languageChanged', onChangeLanguage);
    };
  }, [i18n]);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    i18n.changeLanguage(key);
  };

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <div style={{ display: 'flex'}}>
        <AlignRightOutlined style={{color: colorDark}}/>
        <Title level={2} style={{color: colorDark}}>LISTIFY</Title>
        <span style={{color: colorDark}}>app</span>
      </div>

      <Dropdown.Button menu={{ items, onClick }} placement="bottomRight" icon={currentLanguage.icon || <GlobalOutlined />} style={{width: 'auto'}}>
        {`${t('language')}: ${currentLanguage.label}`}
      </Dropdown.Button>
    </Header>
  );
};

export default AppHeader;