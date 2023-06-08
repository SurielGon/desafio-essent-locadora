interface ICardComponent {
  title?: string;
  body?: JSX.Element;
  footer?: JSX.Element;
  key?: string | number;
  cardClassName?: string;
}
export default function CardComponent({
  title,
  body,
  footer,
  key,
  cardClassName
}: ICardComponent) {
  return (
    <div
      key={key}
      className={`${
        cardClassName ?? ''
      } min-w-fit min-h-min block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}
    >
      <h5 className='h-fit self-center text-center w-full mb-2  text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
        {title}
      </h5>
      {body}
      {footer && <div className='w-full'>{footer}</div>}
    </div>
  );
}
