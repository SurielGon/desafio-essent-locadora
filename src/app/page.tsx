'use client';
import { ButtonComponent } from '@/components/ButtonComponent';
import { ErrorComponent } from '@/components/ErrorComponent';
import { ILogin } from '@/interfaces/login';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setUser } from './GlobalRedux/user/userSlice';

export default function LoginPage() {
  const router = useRouter();
  const dispath = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>();
  const [disableSubmit, setDisableSubmit] = useState(false);

  const onSubmit = async (data: ILogin) => {
    setDisableSubmit(true);
    const res = await fetch(`https://localhost:3000/api/user/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const body = await res.json();
    if (body.isError) {
      toast(body.message, {
        autoClose: 2500,
        type: 'error'
      });
      setDisableSubmit(false);
    } else {
      dispath(setUser(body));
      router.push('/home');
    }
  };
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <label className='mt-3'>Email</label>
        <input
          type='email'
          className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500'
          {...register('email', { required: true })}
        />
        <ErrorComponent msg='Email é obrigatório' show={!!errors.email} />
        <label className='mt-3'>Senha</label>
        <input
          type='password'
          className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500'
          {...register('password', { required: true })}
        />
        <ErrorComponent msg='Senha é obrigatória' show={!!errors.password} />
        <a href='/register' className='text-sky-400 underline my-3'>
          Registrar
        </a>
        <ButtonComponent
          type='submit'
          disabled={disableSubmit}
          isLoading={disableSubmit}
        >
          Entrar
        </ButtonComponent>
      </form>
    </main>);
}
