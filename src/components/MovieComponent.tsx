import { Movie } from "@prisma/client";
import CardComponent from './CardComponent'
import { ButtonComponent } from "./ButtonComponent";
import ModalComponent from "./ModalComponent";
import { Key, useState } from "react";
import { numberToBrl } from "@/utils/money";
interface IMovieComponent {
    movie: Movie
}

export function MovieComponent({ movie }: IMovieComponent){
    const [show, setShow] = useState(false);
    return <>
        <CardComponent 
            cardClassName="m-4 w-fit flex flex-col gap-3"
            title={movie.titulo}
            body={<div className="flex flex-col w-full gap-1">
                    <p>Categorias: {movie.categoria}</p>
                    <p>Valor da Locação: {numberToBrl(movie.precoLocacao)}</p>
                    <p>Quantidade Disponivel: {movie.quantidadeDisponivel}</p>
            </div>}
            footer={<div className="flex flex-row justify-center">
                <div className="flex flex-row gap-x-3">
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