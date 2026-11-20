import Link from 'next/link';
import { siteNav } from '@/lib/sitemap';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          Tech<span className="brand-mark">Hub</span>
        </Link>

        <ul className="primary-nav">
          {siteNav.map((node) => (
            <li key={node.slug}>
              <Link href={`/${node.slug}`}>{node.title}</Link>
              {node.children && node.children.length > 0 && (
                <ul className="submenu">
                  {node.children.map((child) => (
                    <li key={child.slug}>
                      <Link href={`/${node.slug}/${child.slug}`}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <form className="search-form" action="/busca" method="get">
          <input type="search" name="q" placeholder="Buscar no site" aria-label="Buscar no site" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </header>
  );
}
