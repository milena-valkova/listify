import { createContext, useState, ReactNode } from 'react';
import { ContextType } from './types';

const AppContext = createContext<ContextType>({} as ContextType);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState<Error | undefined>(undefined);

  const setError = (err: Error) => {
    if(err){
      setErrorMessage(err);
    }else{
      setErrorMessage(undefined);
    }
  };

  return <AppContext value={{ 
    error: errorMessage, 
    setError, 
    colorLight: 'rgba(77,107,254,.2)', 
    colorDark: '#4d6bfe' 
  }}>{children}</AppContext>;
};

export { AppContext, AppContextProvider };
