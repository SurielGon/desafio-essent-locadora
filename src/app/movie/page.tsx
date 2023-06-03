'use client'
import { Spinner } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import axiosConfig from "../api/api"
import { Movie } from "@prisma/client"
import { MovieComponent } from "@/components/MovieComponent"

export default function ListMoviePage(){
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        async function fetchMovies(){
            setIsLoading(true)
            const res = await axiosConfig.get<Movie[]>('movie/')
            setMovies(res.data ?? [])
            setIsLoading(false)
        }
        fetchMovies()
    },[])

    return <div className="h-full">
        <h1 className={'text-xl font-semibold text-center'}>Loque os melhores e mais recentes filmes!</h1>
        {isLoading ? <div className="mt-10 flex justify-center h-full">
            <Spinner className="h-20 w-20" />
        </div>: movies.length ? movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>) : <div className="mt-10 flex justify-center h-full"><p>Nenhum filme para listar</p></div>}
    </div>
}