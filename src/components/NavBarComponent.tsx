'use client';
import { RootState } from '@/app/GlobalRedux/store';
import { setUser } from '@/app/GlobalRedux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavMenuComponent } from './NavMenuComponent';
import { NavProfileComponent } from './NavProfileComponent';

export function NavBarComponent() {
  const dispath = useDispatch();
  const user = useSelector((state: RootState) => state.loggedUser.user);

  return (
    <div className='bg-slate-800 w-full px-6 gap-x-6 py-3 text-white text-xl flex'>
      <div className='inline-flex flex-1 gap-x-6'>
        <a className='text-xl inline-flex'>Desafio Essent Locadora</a>
        <NavMenuComponent user={user} />
      </div>
      <NavProfileComponent
        user={user}
        onExit={() => {
          dispath(setUser(undefined));
        }}
      />
    </div>
  );
}
