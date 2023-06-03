'use client'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NavBarComponent } from '@/components/NavBarComponent';
import { Providers } from './GlobalRedux/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <NavBarComponent/>
          </header>
          <div className='m-5 h-5/6'>
            {children}
          </div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}
