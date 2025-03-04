import './globals.css';
import ContextProvider from '@/context/contextProvider';
import { Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Quotations',
  description: 'Quotation generator',
};

const roboto = Roboto({
  weight: ['400', '500', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-dark-100 tracking-wide`}>
        <ContextProvider>
          <Toaster {...toastOptions} />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}

var toastOptions = {
  position: 'bottom-center',
  toastOptions: {
    style: {
      paddingInline: '20px',
      paddingBlock: '10px',
      color: 'var(--dark-100)',
      boxShadow:
        '1px solid #7132000 4px 10px rgba(0, 0, 0, 0.2), 0 3px 3px rgba(0, 0, 0, 0.05)',
    },
    loading: {
      style: {
        background: 'var(--loading)',
        fontWeight: 500,
      },
    },
    success: {
      duration: 3000,
      style: {
        background: 'var(--success)',
        fontWeight: 500,
      },
    },
    error: {
      style: {
        background: 'var(--error)',
        fontWeight: 500,
      },
    },
  },
};
