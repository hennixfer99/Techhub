import Link from 'next/link';
import { siteNav } from '@/lib/sitemap';

export default function Footer() {
  const columns = siteNav.slice(0, 3);

  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <h4>TechHub Consultoria</h4>
          <p>Soluções em tecnologia para empresas que buscam previsibilidade e segurança.</p>
          <p>CNPJ 00.000.000/0001-00</p>
          <p>contato@techhub.com.br</p>
          <p>+55 (11) 0000-0000</p>
        </div>

        {columns.map((col) => (
          <div key={col.slug}>
            <h4>{col.title}</h4>
            {col.children?.map((child) => (
              <Link key={child.slug} href={`/${col.slug}/${child.slug}`}>
                {child.title}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} TechHub Consultoria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
