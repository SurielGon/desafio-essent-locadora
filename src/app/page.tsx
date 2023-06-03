"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { ButtonComponent } from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";

export default function Home() {
  const router = useRouter();
  const user = useSelector((state: RootState)=> state.loggedUser.user)
  
  if(!user){
    router.push('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardComponent 
        title="Filmes" 
        body={<div>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Apenas os filmes mais recentes para você!
          </p>
        </div>} 
        footer={
          <div className='flex gap-x-3'>
            <ButtonComponent 
              onClick={()=>{
                router.push('/movie')
              }}>
              Locar
            </ButtonComponent>
            {
              user?.tipo === 'DIRETOR' && <ButtonComponent 
                onClick={()=>{
                  router.push('/movie/register')
                }}>
                Cadastrar
              </ButtonComponent>
            }
          </div>
        }
        />
    </main>
  )
}
