import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import './config/i18n';
import './styles/index.css';
import '@ant-design/v5-patch-for-react-19';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);