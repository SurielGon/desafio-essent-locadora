'use client'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { setUser } from "@/app/GlobalRedux/user/userSlice";
import { NavMenuComponent } from "./NavMenuComponent";
import { NavProfileComponent } from "./NavProfileComponent";
import { useEffect, useState } from "react";
import { ILoggedUser } from "@/interfaces/login";

export function NavBarComponent(){
    const dispath = useDispatch();
    const stateUser = useSelector((state: RootState)=> state.loggedUser.user)
    const [currentUser, setCurrentUser] = useState<ILoggedUser>()
    useEffect(()=>{
        setCurrentUser(stateUser)
    },[stateUser])

    return <div className="bg-slate-800 w-full px-6 gap-x-6 py-3 text-white text-xl flex">
        <div className="inline-flex flex-1 gap-x-6">
            <a className="text-xl inline-flex">Desafio Essent Locadora</a>
            <NavMenuComponent user={currentUser}/>       
        </div>
        <NavProfileComponent 
            user={currentUser} 
            onExit={()=>{
                dispath(setUser({}))
            }}
        />
    </div>
}