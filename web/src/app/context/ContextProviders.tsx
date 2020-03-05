import React from 'react';
import { ConfigProvider, SessionContextProvider } from './';

export interface ContextProvidersProps {
  children: any;
}

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigProvider>
        <SessionContextProvider>
          { children }
        </SessionContextProvider>
      </ConfigProvider>
    </>
  )
}