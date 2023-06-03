/*
  Warnings:

  - You are about to drop the `UserOnMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnMovie" DROP CONSTRAINT "UserOnMovie_atorId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnMovie" DROP CONSTRAINT "UserOnMovie_movieId_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "elenco" TEXT[];

-- DropTable
DROP TABLE "UserOnMovie";
