'use client'
import { useEffect, useState } from "react";
import { LinkComponent } from "./LinkComponent";
import { ILoggedUser } from "@/interfaces/login";

interface INavProfileComponent {
    user?: ILoggedUser
    onExit?: ()=>void
}

export function NavProfileComponent({ user, onExit }: INavProfileComponent){

    const [component, setComponent] = useState<JSX.Element>(<></>)


    useEffect(()=>{
        if(user){
            setComponent(<div className="flex gap-x-6">
                Bem vindo {user.nome}
                <span className="bg-white border h-full"></span>
                <LinkComponent className="text-md hover:text-red-500" onClick={onExit} href="/" title="Sair"/>
            </div>)
        }else{
            setComponent(<></>)
        }
    },[user, onExit])

    return component
}