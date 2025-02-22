import { useEffect, use } from 'react';
import { message } from 'antd';
import { AppContext } from '../context/AppContext';


export default function ErrorMessage () {
  const [messageApi, contextHolder] = message.useMessage();
  const context = use(AppContext);
  const { error } = context;

  useEffect(() => {
    if(error){
      const showError = () => {
        messageApi.error({
          type: 'error',
          content: error.message,
        });
      };
      
      showError();
    }
  },[error])
  
  return ( contextHolder )
}