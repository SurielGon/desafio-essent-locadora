import { Spinner } from "@material-tailwind/react"
import { ButtonHTMLAttributes } from "react"

interface IButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement>{
    isLoading?: boolean
}
export function ButtonComponent({ type, className, onClick, children, isLoading, disabled }: IButtonComponent){
    return <button
      type={type ?? "button"}
      className={`
        ${disabled ? 'opacity-70' : 'hover:opacity-90'} 
        inline-block rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
        ${className ?? ''}
      `}
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={onClick}
      disabled={disabled}
      >
      {isLoading ? <div className="flex justify-center">
        <Spinner color="blue" />
      </div> : children}
    </button>
}