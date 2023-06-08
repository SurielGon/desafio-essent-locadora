'use client';
import { ILoggedUser } from '@/interfaces/login';
import { useEffect, useState } from 'react';
import { LinkComponent } from './LinkComponent';

interface INavMenuComponent {
  user?: ILoggedUser;
}

export function NavMenuComponent({ user }: INavMenuComponent) {
  const [component, setComponent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    if (user) {
      setComponent(
        <>
          <span className='bg-white border h-full'></span>
          <ul className='inline-flex flex-1 gap-x-6'>
            <li>
              <LinkComponent href='/home' title='Home' />
            </li>
            <li>
              <LinkComponent href='/movie' title='Filmes' />
            </li>
          </ul>
        </>
      );
    } else {
      setComponent(<></>);
    }
  }, [user]);

  return component;
}