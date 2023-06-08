'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
import AuthorizedLoading from './loading';

export default function AuthorizedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.loggedUser.user);
  const [component, setComponent] = useState<React.ReactNode>(
    <AuthorizedLoading />
  );

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setComponent(children);
    }
  }, [user, router, children]);

  return component;
}
