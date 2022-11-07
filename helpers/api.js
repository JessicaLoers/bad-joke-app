function fetcher(url) {
  if (!url) return;
  return fetch(url).then((res) => res.json());
}

export { fetcher };
