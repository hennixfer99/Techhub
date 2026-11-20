import Link from 'next/link';
import { SiteNode } from '@/lib/sitemap';
import { getRelatedNodes } from '@/lib/utils';

const schemeLabels: Record<string, string> = {
  assunto: 'Por assunto',
  publico: 'Por público-alvo',
  tarefa: 'Por tarefa',
};

type Props = {
  node: SiteNode;
  path: string[];
};

export default function ContentPage({ node, path }: Props) {
  const related = getRelatedNodes(path);
  const basePath = '/' + path.join('/');

  return (
    <main className="page">
      <div className="container">
        <header className="page-header">
          {node.scheme && (
            <span className="scheme-tag">{schemeLabels[node.scheme]}</span>
          )}
          <h1>{node.title}</h1>
          {node.description && <p>{node.description}</p>}
        </header>

        <div className="page-grid">
          <article>
            {node.children && node.children.length > 0 ? (
              <>
                <h2>O que você encontra aqui</h2>
                <p>
                  Esta seção organiza nossos conteúdos relacionados a{' '}
                  <strong>{node.title.toLowerCase()}</strong>. Escolha um dos tópicos
                  abaixo para saber mais.
                </p>
                <div className="children-grid">
                  {node.children.map((child) => (
                    <Link key={child.slug} href={`${basePath}/${child.slug}`} className="child-card">
                      <h3>{child.title}</h3>
                      {child.description && <p>{child.description}</p>}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2>Sobre {node.title}</h2>
                <p>
                  {node.description}
                </p>
                <p>
                  Nossa equipe conduz projetos de ponta a ponta nessa frente, desde o
                  diagnóstico inicial até a entrega e sustentação. Trabalhamos com
                  metodologias ágeis, documentação viva e governança compartilhada com o
                  cliente, o que garante previsibilidade de prazo e de orçamento em todas
                  as fases.
                </p>
                <p>
                  Para iniciar uma conversa, utilize um dos canais listados ao lado ou
                  solicite um orçamento formal. Todos os projetos passam por uma reunião
                  de alinhamento gratuita antes da emissão de proposta comercial.
                </p>

                {related.length > 0 && (
                  <section style={{ marginTop: 40 }}>
                    <h3>Conteúdos relacionados</h3>
                    <div className="children-grid">
                      {related.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${path.slice(0, -1).join('/')}/${item.slug}`}
                          className="child-card"
                        >
                          <h3>{item.title}</h3>
                          {item.description && <p>{item.description}</p>}
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </article>

          <aside className="sidebar">
            <h4>Nesta seção</h4>
            <ul>
              {node.children?.map((child) => (
                <li key={child.slug}>
                  <Link href={`${basePath}/${child.slug}`}>{child.title}</Link>
                </li>
              ))}
              {(!node.children || node.children.length === 0) && related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${path.slice(0, -1).join('/')}/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="cta-box">
              <h3>Precisa de uma proposta?</h3>
              <p>Fale com um especialista e receba um orçamento personalizado em até um dia útil.</p>
              <Link href="/atendimento/orcamento" className="btn">
                Solicitar orçamento
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
