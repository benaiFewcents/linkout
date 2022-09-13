import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles'
import { Toaster } from 'react-hot-toast'
import theme from '../Theme'
import Loading from '../Components/Loading'
import { storeWrapper } from '../Store'
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react'

import '../styles/_allStyle.scss'


const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<Loading />}>
      <Component {...pageProps} />
    </Suspense>

    <Toaster
      toastOptions={{
        style: {
          textAlign: 'center',
        },
        duration: 2200,
      }}
    />
  </ThemeProvider>
);
export default storeWrapper.withRedux(MyApp);
