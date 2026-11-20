import { siteNav, SiteNode } from './sitemap';

export type BreadcrumbItem = {
  title: string;
  href: string;
};

export function findNodeByPath(path: string[]): SiteNode | null {
  let nodes: SiteNode[] | undefined = siteNav;
  let current: SiteNode | null = null;

  for (const segment of path) {
    if (!nodes) return null;
    const found = nodes.find((n) => n.slug === segment);
    if (!found) return null;
    current = found;
    nodes = found.children;
  }

  return current;
}

export function buildBreadcrumbs(path: string[]): BreadcrumbItem[] {
  const trail: BreadcrumbItem[] = [{ title: 'Home', href: '/' }];
  let nodes: SiteNode[] | undefined = siteNav;
  const accumulated: string[] = [];

  for (const segment of path) {
    if (!nodes) break;
    const found = nodes.find((n) => n.slug === segment);
    if (!found) break;
    accumulated.push(segment);
    trail.push({
      title: found.title,
      href: '/' + accumulated.join('/'),
    });
    nodes = found.children;
  }

  return trail;
}

export function getAllPaths(): string[][] {
  const paths: string[][] = [];

  const walk = (nodes: SiteNode[], parent: string[]) => {
    for (const node of nodes) {
      const current = [...parent, node.slug];
      paths.push(current);
      if (node.children) walk(node.children, current);
    }
  };

  walk(siteNav, []);
  return paths;
}

export function getRelatedNodes(path: string[]): SiteNode[] {
  if (path.length < 2) return [];
  const parentPath = path.slice(0, -1);
  const parent = findNodeByPath(parentPath);
  if (!parent?.children) return [];
  return parent.children.filter((n) => n.slug !== path[path.length - 1]).slice(0, 3);
}
