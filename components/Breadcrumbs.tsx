import Link from 'next/link';
import { BreadcrumbItem } from '@/lib/utils';

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Trilha de navegação" className="breadcrumbs">
      <div className="container">
        <ol>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.href}>
                {isLast ? (
                  <span className="current" aria-current="page">
                    {item.title}
                  </span>
                ) : (
                  <Link href={item.href}>{item.title}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
