import { Movie } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export async function GET(request: Request) {
  const movies = await prisma.movie.findMany();
  return new Response(JSON.stringify(movies));
}

export async function POST(request: Request) {
  const movieData: Movie = await request.json();
  const createdMovie = await prisma.movie.create({
    data: movieData
  });
  return new Response(JSON.stringify(createdMovie));
}
