import { User } from "@prisma/client";
import bcrypt from 'bcrypt';
import { prisma } from "../../../../../prisma/client";
import { HttpError } from "@/utils/error";

export async function POST(request: Request) {
    const userData: User = await request.json().then(body => body)
    const userExists = await prisma.user.findFirst({
        where: {
            email: userData.email
        }
    })
    if(userExists){
        return HttpError({ message: "Email já cadastrado", status: 409 });
    }
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(userData.password, salt);
    userData.password = encryptedPassword

    const createdUser = await prisma.user.create({
        data: userData
    })
    const response: Partial<User> = createdUser
    delete response.password
    return new Response(JSON.stringify(response));
}