'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface IProviders {
    children: JSX.Element[] | JSX.Element
}

export function Providers({ children }: IProviders){
    const router = useRouter()
  
    useEffect(()=>{
        const user = store.getState().loggedUser.user
        if(!user){
            router.push('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[store])
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}