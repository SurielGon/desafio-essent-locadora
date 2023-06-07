import { Movie } from "@prisma/client";
import CardComponent from './CardComponent'
import { ButtonComponent } from "./ButtonComponent";
import ModalComponent from "./ModalComponent";
import { useState } from "react";
interface IMovieComponent {
    movie: Movie
}

export function MovieComponent({ movie }: IMovieComponent){
    const [show, setShow] = useState(false);
    return <>
    <CardComponent 
        cardClassName="m-4 flex flex-row gap-x-3" 
        key={movie.id} 
        title={movie.titulo}
        body={<div className="flex flex-row w-full gap-x-3">
                <p className="text-white">Categorias: {movie.categoria}</p>
                <p className="text-white">Valor da Locação: R${(movie.precoLocacao/100).toFixed(2)}</p>
                <p className="text-white">Quantidade Disponivel: {movie.quantidadeDisponivel}</p>
        </div>}
        footer={<div className="flex flex-row justify-center">
            <div className="flex flex-col gap-y-3">
                <ButtonComponent
                    onClick={()=>{ setShow(true) }}
                >
                    Ler Sinopse
                </ButtonComponent>
                <ButtonComponent
                    disabled={true}
                >
                    Locar
                </ButtonComponent>
            </div>
        </div>}
    />
    <ModalComponent showModal={show} title={movie.titulo} body={movie.sinopse} onModalClose={()=>{setShow(false)}}/>
    </>
}