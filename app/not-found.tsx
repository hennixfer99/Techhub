import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page">
      <div className="container">
        <header className="page-header">
          <span className="scheme-tag">Erro 404</span>
          <h1>Página não encontrada</h1>
          <p>
            O conteúdo que você procura não existe ou foi movido. Verifique o endereço
            digitado ou use a busca no topo do site.
          </p>
        </header>
        <Link href="/" className="btn">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
