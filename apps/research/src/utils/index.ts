import { appStructure } from '@/config';
import { Navigations } from '@/types';

export const getUrl = (...slugs: Array<string>) => `/${slugs.join('/')}`;

export function forceDownload(blob: string, filename?: string | undefined) {
  var a = document.createElement('a');
  //@ts-ignore
  a.download = filename;
  //@ts-ignore
  a.href = blob;
  // For Firefox https://stackoverflow.com/a/32226068
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Current blob size limit is around 500MB for browsers
export function downloadResource(url: string, filename?: string) {
  if (!filename) filename = url.split('\\').pop()!.split('/').pop();
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.error(e));
}

export const siteUsername = '@K33Research';

export const getReadingTime = () => {
  const articleBody = document.getElementById('article-body');
  if (!articleBody) return 0;
  const text = document.getElementById('article-body')!.innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

export const getLevelTwos = (levelOne: string) => {
  return appStructure.navigation
    .filter((nav) => nav.key === levelOne && nav.children !== undefined)
    .flatMap(({ children, key, label, url }) => [
      { key: 'home', label: 'Home', url },
      ...children?.flatMap((nav) => nav)!,
    ]) as Navigations;
};

export function isBrowser() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export * from './share';
export * from './markdown';
