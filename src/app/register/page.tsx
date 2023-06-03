"use client";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { POST } from '../api/user/register/route';
import axiosConfig from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import { User } from '@prisma/client';
import { useState } from 'react';
import { IRegisterUser } from '@/interfaces/register';
import { ErrorComponent } from '@/components/ErrorComponent';
import { ButtonComponent } from '@/components/ButtonComponent';

export default function RegisterPage() {
  const router = useRouter();
  const [disableSubmit, setDisableSubmit] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IRegisterUser>();
  const onSubmit = async (data: IRegisterUser) => {
    setDisableSubmit(true)
    const res = await axiosConfig.post<User | string>('/user/register', data);
    if(typeof res.data === 'string'){
      toast(res.data,{
        autoClose: 2500,
        type: 'error',
      })
      setDisableSubmit(false)
    }else{
      toast("Usuário registrado com sucesso!",{
        autoClose: 2500,
        type: 'success',
      })
      router.push('/login')
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <label className='mt-3'>Nome</label>
        <input className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("nome", { required: true })} />
        <ErrorComponent msg='Nome é obrigatório' show={!!errors.nome} />
        <label className='mt-3'>Email</label>
        <input type="email" className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("email", { required: true })} />
        <ErrorComponent msg='Email é obrigatório' show={!!errors.email} />
        <label className='mt-3'>Senha</label>
        <input type='password' className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("password", { required: true })} />
        <ErrorComponent msg='Senha é obrigatória' show={!!errors.password} />
        <label className='mt-3' data-te-select-label-ref>Tipo</label>
        <select className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' data-te-select-init {...register("tipo", { required: true })}>
            <option value="CLIENTE">Cliente</option>
            <option value="DIRETOR">Diretor</option>
            <option value="ATOR">Ator</option>
        </select>
        <ButtonComponent
          type="submit"
          className='bg-green-600 mt-4'
          disabled={disableSubmit}
          isLoading={disableSubmit}
        >
          Registrar
        </ButtonComponent>
        <ButtonComponent
          className='bg-yellow-600 mt-4'
          disabled={disableSubmit}
          onClick={()=>{ router.back() }}
        >
          Voltar
        </ButtonComponent>
      </form>
    </main>
  )
}
