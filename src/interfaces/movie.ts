import { Movie } from "@prisma/client";

export interface IRegisterMovie extends Omit<Movie, 'id' | 'precoLocacao'> {
    precoLocacao: string
}