import { MovieComponent } from '@/components/MovieComponent';
import { Movie } from '@prisma/client';

export const revalidate = 0;

export default async function ListMoviePage() {
  const res = await fetch(process.env.DOMAIN_URL + '/api/movie', {
    method: 'GET'
  });
  const body = await res.json() as Movie[];

  return (
    <div className='h-full'>
      <h1 className={'text-xl font-semibold text-center'}>
        Loque os melhores e mais recentes filmes!
      </h1>
      {body.length ? (
        <div className='flex flex-wrap'>
          {body.map((movie) => (
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



