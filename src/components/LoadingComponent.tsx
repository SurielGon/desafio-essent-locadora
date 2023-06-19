export default function LoadingComponent() {
  return (
    <div className='grid h-full place-items-center'>
      <div className="animate-spin inline-block aspect-square w-[6%] border-[5px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
}
