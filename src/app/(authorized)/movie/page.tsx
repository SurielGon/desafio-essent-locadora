'use client';
import { MovieComponent } from '@/components/MovieComponent';
import { Spinner } from '@material-tailwind/react';
import { Movie } from '@prisma/client';
import { useEffect, useState } from 'react';

export default function ListMoviePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(`/api/movie`, {
        method: 'GET'
      });
      const body = await res.json();
      setMovies(body);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <div className='h-full'>
      <h1 className={'text-xl font-semibold text-center'}>
        Loque os melhores e mais recentes filmes!
      </h1>
      {isLoading ? (
        <div className='mt-10 flex justify-center h-full'>
          <Spinner className='h-20 w-20' />
        </div>
      ) : movies.length ? (
        <div className='flex flex-wrap'>
          {movies.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='mt-10 flex justify-center h-full'>
          <p>Nenhum filme para listar</p>
        </div>
      )}
    </div>
  );
}
