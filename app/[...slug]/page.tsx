import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContentPage from '@/components/ContentPage';
import { findNodeByPath, buildBreadcrumbs, getAllPaths } from '@/lib/utils';

type PageProps = {
  params: { slug: string[] };
};

export function generateStaticParams() {
  return getAllPaths().map((path) => ({ slug: path }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const node = findNodeByPath(params.slug);
  if (!node) return { title: 'Página não encontrada' };
  return {
    title: node.title,
    description: node.description,
  };
}

export default function Page({ params }: PageProps) {
  const node = findNodeByPath(params.slug);
  if (!node) notFound();

  const trail = buildBreadcrumbs(params.slug);

  return (
    <>
      <Breadcrumbs items={trail} />
      <ContentPage node={node} path={params.slug} />
    </>
  );
}
