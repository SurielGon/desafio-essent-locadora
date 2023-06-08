'use client'
import { useEffect, useState } from "react";
import { LinkComponent } from "./LinkComponent";
import { ILoggedUser } from "@/interfaces/login";

interface INavMenuComponent {
    user?: ILoggedUser
}

export function NavMenuComponent({ user }: INavMenuComponent){

    const [component, setComponent] = useState<JSX.Element>(<></>)

    useEffect(()=>{
        if(user){
            setComponent(<>
                <span className="bg-white border h-full"></span>
                <ul className="inline-flex flex-1 gap-x-6">
                    <li>
                        <LinkComponent href="/home" title="Home"/>
                    </li>
                    <li>
                        <LinkComponent href="/movie" title="Filmes"/>
                    </li>
                </ul>
            </>)
        }
    },[user])

    return component
}