'use client'
import { ILoggedUser } from "@/interfaces/login";
import { LinkComponent } from "./LinkComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { setUser } from "@/app/GlobalRedux/user/userSlice";

export function NavBarComponent(){

    const dispath = useDispatch();
    const user = useSelector((state: RootState)=> state.loggedUser.user)
    
    return <div className="bg-slate-800 w-full px-6 gap-x-6 py-3 text-white text-xl flex">
        <div className="inline-flex flex-1 gap-x-6">
            <a className="text-xl inline-flex">Desafio Essent Locadora</a>
            {
                user && <>
                <span className="bg-white border h-full"></span>
            <ul className="inline-flex flex-1 gap-x-6">
                <li>
                    <LinkComponent href="/" title="Home"/>
                </li>
                <li>
                    <LinkComponent href="/movie" title="Filmes"/>
                </li>
            </ul>
                </>
            } 
            
        </div>
        {user && <div className="flex gap-x-6">
            Bem vindo {user.nome}
            <span className="bg-white border h-full"></span>
            <LinkComponent className="text-md hover:text-red-500" onClick={()=>{
                dispath(setUser({}))
            }} href="/login" title="Sair"/>
        </div>}
    </div>
}