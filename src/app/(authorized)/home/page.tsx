'use client';
import { ButtonComponent } from '@/components/ButtonComponent';
import CardComponent from '@/components/CardComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';
import Link from 'next/link';

export default function Home() {
  const user = useSelector((state: RootState) => state.loggedUser.user);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <CardComponent
        title='Filmes'
        body={
          <div>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Apenas os filmes mais recentes para você!
            </p>
          </div>
        }
        footer={
          <div className='flex gap-x-3'>
            <Link href={'/movie'}>
              <ButtonComponent>
                Locar
              </ButtonComponent>
            </Link>
            {user?.tipo === 'DIRETOR' && (
              <Link href={'/movie/register'}>
                <ButtonComponent>
                  Cadastrar
                </ButtonComponent>
              </Link>
            )}
          </div>
        }
      />
    </main>
  );
}
