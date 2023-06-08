'use client';
import LoadingComponent from '@/components/LoadingComponent';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';

export default function DirectorOnlyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.loggedUser.user);
  const [component, setComponent] = useState<React.ReactNode>(
    <LoadingComponent />
  );

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else if (user.tipo !== 'DIRETOR') {
      router.push('/home');
    } else {
      setComponent(children);
    }
  }, [user, router, children]);

  return component;
}
