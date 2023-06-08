import { HttpError } from '@/utils/error';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const userData: { email: string; password: string } = await request
    .json()
    .then((body) => body);
  const userExists = await prisma.user.findFirst({
    where: {
      email: userData.email
    }
  });
  if (!userExists) {
    return HttpError({ message: 'Usuário não encontrado', status: 404 });
  }
  const isMatch = await bcrypt.compare(userData.password, userExists.password);
  if (!isMatch) {
    return HttpError({ message: 'Senha inválida', status: 400 });
  }
  const response: Partial<User> = userExists;
  delete response.password;
  const acessToken = jwt.sign(response, process.env.JWT_SECRET!, {
    expiresIn: '1d'
  });
  return new Response(JSON.stringify({ user: response, acessToken }));
}
