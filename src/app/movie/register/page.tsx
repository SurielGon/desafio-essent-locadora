'use client'
import { RootState } from "@/app/GlobalRedux/store";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ErrorComponent } from "@/components/ErrorComponent"
import { IRegisterMovie } from "@/interfaces/movie";
import { brlToNumber } from "@/utils/money";
import { Movie } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function RegisterMoviePage(){
  const router = useRouter();
  const user = useSelector((state: RootState)=> state.loggedUser.user)
  
  useEffect(()=>{
    if(!user){
      router.push('/login')
    }else if(user.tipo !== 'DIRETOR'){
      router.push('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])

  const [disableSubmit, setDisableSubmit] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterMovie>();
  const onSubmit = async (data: IRegisterMovie) => {
    setDisableSubmit(true)
    const precoLocacao = brlToNumber(data.precoLocacao)
    const movie: Omit<Movie, 'id'> = {
        ...data,
        precoLocacao: precoLocacao * 100,
        quantidadeDisponivel: Number(data.quantidadeDisponivel),
        dataLancamento: new Date(data.dataLancamento)
    }
    const res = await fetch(`/api/movie`, {
        method: 'POST',
        body: JSON.stringify(movie)
    });
    const body = await res.json()
    if(body.isError){
      toast(body.message,{
        autoClose: 2500,
        type: 'error',
      })
    }else{
      toast("Filme cadastrado com sucesso!",{
        autoClose: 2500,
        type: 'success',
      })
      router.back()
    }
    setDisableSubmit(false)
  };

    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="font-bold text-2xl mb-3">Cadastro de Filmes</p>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-x-6 justify-between'>
                    <div className="flex flex-col">
                        <label className='mt-3'>Título</label>
                        <input placeholder="Aventuras Incríveis" className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("titulo", { required: true })} />
                        <ErrorComponent msg='Título é obrigatório' show={!!errors.titulo} />
                    </div>
                    <div className="flex flex-col">
                        <label className='mt-3'>Quantidade Disponivel</label>
                        <input min="0" placeholder="1" type='number' className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("quantidadeDisponivel", { required: true })} />
                        <ErrorComponent msg='Quantidade é obrigatória' show={!!errors.quantidadeDisponivel} />
                    </div>
                </div>
                <div className='flex flex-row gap-x-6 justify-between'>
                    <div className="flex flex-col">
                        <label className='mt-3'>Categorias</label>
                        <input placeholder="Ação, Suspense" type='text' className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("categoria", { required: true })} />
                        <ErrorComponent msg='Categoria é obrigatória' show={!!errors.categoria} />
                    </div>
                    <div className="flex flex-col">
                        <label className='mt-3'>Preço da Locação</label>
                        <CurrencyInput
                            placeholder="R$ 12.00"
                            defaultValue={0}
                            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                            className="p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("precoLocacao", { required: true })}
                        />
                        <ErrorComponent msg='Preço é obrigatório' show={!!errors.precoLocacao} />                    
                    </div>
                </div>
                <div className='flex flex-row gap-x-6 justify-between max-w-md'>
                    <div className="flex flex-col max-w-xs">
                        <label className='mt-3'>Data de Lancamento</label>
                        <input type='date' max={new Date().toISOString().split('T')[0]} className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("dataLancamento", { required: true })} />
                        <ErrorComponent msg='Data de lançamento é obrigatória' show={!!errors.dataLancamento} />
                    </div>
                    <div className="flex flex-col">
                        <label className='mt-3'>URL da Imagem</label>
                        <input placeholder="URL da imagem" className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("imagemUrl", { required: true })} />
                        <ErrorComponent msg='URL da Imagem é obrigatória' show={!!errors.imagemUrl} />
                    </div>
                </div>

                <label className='mt-3'>Elenco</label>
                <input placeholder="Leonardo DiCaprio, Morgan Freeman" type='text' className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("imagemUrl", { required: true })} />
                <ErrorComponent msg='Link da Imagem é obrigatório' show={!!errors.imagemUrl} />

                <label className='mt-3'>Sinopse</label>
                <textarea placeholder="Descreva a sinopse do filme" className='p-1 rounded outline outline-1 outline-offset-1 focus:outline-none focus:ring focus:border-blue-500' {...register("sinopse", { required: true })} />
                <ErrorComponent msg='Sinopse é obrigatória' show={!!errors.sinopse} />
                
                <div className="flex justify-around">
                    <ButtonComponent
                        className='bg-yellow-600 mt-4 max-w-fit'
                        disabled={disableSubmit}
                        onClick={()=>{ router.back() }}
                    >
                        Voltar
                    </ButtonComponent>
                    <ButtonComponent
                        type="submit"
                        className='bg-green-600 mt-4 max-w-fit'
                        disabled={disableSubmit}
                        isLoading={disableSubmit}
                    >
                        Cadastrar
                    </ButtonComponent>
                </div>
            </div>
        </form>
 </main>
}