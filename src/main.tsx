import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
);
