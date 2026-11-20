import Link from 'next/link';
import { siteNav } from '@/lib/sitemap';

export default function HomePage() {
  const servicos = siteNav.find((n) => n.slug === 'servicos');
  const solucoes = siteNav.find((n) => n.slug === 'solucoes');
  const conteudo = siteNav.find((n) => n.slug === 'conteudo');

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Tecnologia que sustenta a sua operação.</h1>
          <p>
            Consultoria, desenvolvimento e suporte em TI para empresas que precisam de
            previsibilidade, segurança e tempo pra focar no negócio.
          </p>
          <div className="hero-actions">
            <Link href="/atendimento/orcamento" className="btn">
              Solicitar orçamento
            </Link>
            <Link href="/servicos" className="btn btn-outline">
              Conheça os serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Serviços</h2>
            <Link href="/servicos">Ver todos</Link>
          </div>
          <div className="children-grid">
            {servicos?.children?.map((item) => (
              <Link
                key={item.slug}
                href={`/servicos/${item.slug}`}
                className="child-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Soluções por segmento</h2>
            <Link href="/solucoes">Ver todas</Link>
          </div>
          <div className="children-grid">
            {solucoes?.children?.map((item) => (
              <Link
                key={item.slug}
                href={`/solucoes/${item.slug}`}
                className="child-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Conteúdo em destaque</h2>
            <Link href="/conteudo">Ver todo o conteúdo</Link>
          </div>
          <div className="children-grid">
            {conteudo?.children?.map((item) => (
              <Link
                key={item.slug}
                href={`/conteudo/${item.slug}`}
                className="child-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
