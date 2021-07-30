async function http<T>(path: string, config?: any): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('Could not load info.');
  }
  return response.json().catch(() => { throw new Error('Error while getting response'); });
}

async function get<T>(path: string, config?: any): Promise<T> {
  const init = { method: 'GET', ...config };
  return http<T>(path, init);
}

async function post<T, U>(
  path: string,
  body: T,
  config: any,
): Promise<U> {
  const init = { method: 'POST', body: JSON.stringify(body), ...config };
  return http<U>(path, init);
}

export default { get, post };
