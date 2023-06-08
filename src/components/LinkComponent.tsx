import Link from 'next/link';

interface ILinkComponent {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

export function LinkComponent({
  title,
  href,
  onClick,
  className
}: ILinkComponent) {
  return (
    <Link
      onClick={onClick}
      className={`hover:text-cyan-600 ${className ?? ''}`}
      href={href}
    >
      {title}
    </Link>
  );
}
