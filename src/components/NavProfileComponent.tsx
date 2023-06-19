'use client';
import { ILoggedUser } from '@/interfaces/login';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface INavProfileComponent {
  user?: ILoggedUser;
  onExit?: () => void;
}

export function NavProfileComponent({ user, onExit }: INavProfileComponent) {
  const [component, setComponent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    if (user) {
      setComponent(
        <div className='flex gap-x-6'>
          Bem vindo {user.nome}
          <span className='bg-white border h-full'></span>
            <Link
              onClick={onExit}
              className={`text-md hover:text-red-500`}
              href={'/'}
            >
              Sair
            </Link>
        </div>
      );
    } else {
      setComponent(<></>);
    }
  }, [user, onExit]);

  return component;
}
