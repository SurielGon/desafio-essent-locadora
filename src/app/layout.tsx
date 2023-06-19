import { NavBarComponent } from '@/components/NavBarComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './GlobalRedux/provider';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <header>
            <NavBarComponent />
          </header>
          <div className='m-5 h-5/6'>{children}</div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
