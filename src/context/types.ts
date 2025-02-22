import { ReactNode } from "react";

export interface ContextType { 
  error: Error | undefined;
  setError: Function;
  colorLight: string;
  colorDark: string;
}

export interface Post { 
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User { 
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface PostWithUser extends Post {
  user: User;
}

export interface Error {
  message: string;
  name: string;
  stack?: unknown;
  cause?: unknown;
}

export interface LanguageProps {
  label: string,
  key: string,
  icon: ReactNode
}