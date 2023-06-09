'use client';
import { Provider } from 'react-redux';
import { store } from './store';

interface IProviders {
  children: JSX.Element[] | JSX.Element;
}

export function Providers({ children }: IProviders) {
  return <Provider store={store}>{children}</Provider>;
}
