import AppHeader from '../components/Header';
import { Layout, Typography, Divider, Skeleton } from 'antd';
import { lazy, Suspense } from 'react';
import { AppContextProvider } from '../context/AppContext';
import ErrorMessage from '../components/ErrorMessage';
import { useTranslation } from 'react-i18next';

const { Content, Footer } = Layout;
const { Title } = Typography;

const LazyPostsList = lazy(() => import('../pages/PostsList'));

export default function App () {
  const { t } = useTranslation();
  
  return (
    <AppContextProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader/>
        <Divider style={{margin: '1em 0'}}/>
        <Content>
          <div style={{padding: '0 0 1em'}}> 
            <Title level={4}>{t("blogPost")}</Title>
            <Title level={5} style={{margin: '.2em 0 2em'}}>{t("welcome")}</Title>
          </div>
          <Suspense fallback={<Skeleton/>}>
            <LazyPostsList />
          </Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Listify ©{new Date().getFullYear()}, {t("footer")}
        </Footer>
      </Layout>
      <ErrorMessage />
    </AppContextProvider>
  );
};
