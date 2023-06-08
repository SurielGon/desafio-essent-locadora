interface IErrorComponent {
  show?: boolean;
  msg: string;
}

export function ErrorComponent({ msg, show }: IErrorComponent) {
  return show ? <span className='error text-red-600'>{msg}</span> : <></>;
}
