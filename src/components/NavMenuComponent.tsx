import { ILoggedUser } from '@/interfaces/login';
import Link from 'next/link';

interface INavMenuComponent {
  user?: ILoggedUser;
}

export function NavMenuComponent({ user }: INavMenuComponent) {
  return user ? <>
    <span className='bg-white border h-full'></span>
    <ul className='inline-flex flex-1 gap-x-6'>
      <li>
        <Link className={`hover:text-cyan-600`} href='/home'>Home</Link>
      </li>
      <li>
        <Link className={`hover:text-cyan-600`} href='/movie'>Filmes</Link>
      </li>
    </ul>
  </> : <></>;
}
