interface IHttpError{
    message: string
    status: number
}

export interface IErrorResponse extends IHttpError{
    isError: boolean
}

export function HttpError({ message, status }: IHttpError){
    return new Response(JSON.stringify({ message: message, status: status, isError: true }))    
}