-- AlterTable
ALTER TABLE "RentedMovie" RENAME CONSTRAINT "Locacao_pkey" TO "RentedMovie_pkey";

-- RenameForeignKey
ALTER TABLE "RentedMovie" RENAME CONSTRAINT "Locacao_movieId_fkey" TO "RentedMovie_movieId_fkey";

-- RenameForeignKey
ALTER TABLE "RentedMovie" RENAME CONSTRAINT "Locacao_userId_fkey" TO "RentedMovie_userId_fkey";
