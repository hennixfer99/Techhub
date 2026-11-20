# TechHub Consultoria

Site institucional em Next.js 14 (App Router) + TypeScript que representa a Arquitetura da Informação proposta na Atividade 2.

## Stack

- Next.js 14 com App Router
- React 18
- TypeScript estrito
- CSS puro (sem framework), via `app/globals.css`
- Sem bibliotecas externas de UI

## Rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

O `generateStaticParams` da rota catch-all gera estaticamente todas as páginas do sitemap na build.

## Estrutura

```
techhub/
├── app/
│   ├── layout.tsx                     Root layout com Header + Footer
│   ├── page.tsx                       Home com seções em destaque
│   ├── globals.css                    Tokens e estilos globais
│   ├── not-found.tsx                  404 custom
│   ├── [...slug]/page.tsx             Catch-all que renderiza qualquer nó do sitemap
│   └── atendimento/
│       ├── contato/page.tsx           Formulário de contato (client component)
│       └── orcamento/page.tsx         Formulário de orçamento (client component)
├── components/
│   ├── Header.tsx                     Nav principal com submenus
│   ├── Footer.tsx                     Rodapé em colunas
│   ├── Breadcrumbs.tsx                Trilha de navegação
│   └── ContentPage.tsx                Template genérico para páginas de conteúdo
├── lib/
│   ├── sitemap.ts                     Fonte única de verdade do sitemap tipado
│   └── utils.ts                       Helpers (findNode, breadcrumbs, allPaths)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Esquemas de categorização (atende o requisito 2)

Cada nó de alto nível tem um `scheme` no sitemap:

- `assunto`: Serviços, Produtos, Conteúdo, Institucional
- `publico`: Soluções por Segmento
- `tarefa`: Atendimento, Área do Cliente

O `scheme` é exibido como tag no cabeçalho da página pra sinalizar o esquema em uso.

## Navegação (atende o requisito 4)

- Menu principal com submenus no hover (gerado a partir do sitemap)
- Busca interna no header (query string para `/busca`)
- Breadcrumbs em todas as páginas internas
- Links contextuais no sidebar (seções relacionadas)
- Footer com acesso rápido às principais seções

## Jornadas (atende o requisito 5)

- Home → Serviços → Consultoria em TI → Cloud Computing → Solicitar Orçamento
- Home → Soluções por Segmento → Pequenas Empresas → (link) → Produtos → Sistemas de Gestão → ERP → Fale Conosco
