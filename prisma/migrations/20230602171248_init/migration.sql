-- CreateEnum
CREATE TYPE "userType" AS ENUM ('CLIENTE', 'ATOR', 'DIRETOR');

-- CreateEnum
CREATE TYPE "rentalSituation" AS ENUM ('regular', 'atrasado', 'entregue');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipo" "userType" NOT NULL DEFAULT 'CLIENTE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataLancamento" TIMESTAMP(3) NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "precoLocacao" INTEGER NOT NULL,
    "quantidadeDisponivel" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnMovie" (
    "atorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "UserOnMovie_pkey" PRIMARY KEY ("atorId","movieId")
);

-- CreateTable
CREATE TABLE "Locacao" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "dataDevolucao" TIMESTAMP(3) NOT NULL,
    "limiteDevolucao" TIMESTAMP(3) NOT NULL,
    "valorMulta" INTEGER NOT NULL,
    "ValorTotal" INTEGER NOT NULL,
    "situacao" "rentalSituation" NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Locacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserOnMovie" ADD CONSTRAINT "UserOnMovie_atorId_fkey" FOREIGN KEY ("atorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnMovie" ADD CONSTRAINT "UserOnMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locacao" ADD CONSTRAINT "Locacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locacao" ADD CONSTRAINT "Locacao_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
