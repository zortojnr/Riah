interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function updatePageSEO({ title, description, canonical, ogTitle, ogDescription }: PageSEO) {
  document.title = title;
  setMeta('name', 'description', description);
  setLink('canonical', canonical);
  setMeta('property', 'og:url', canonical);
  setMeta('property', 'og:title', ogTitle ?? title);
  setMeta('property', 'og:description', ogDescription ?? description);
  setMeta('name', 'twitter:title', ogTitle ?? title);
  setMeta('name', 'twitter:description', ogDescription ?? description);
}

function setMeta(attr: string, name: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
