import { THeaders } from '../types/THeaders';

/* eslint-disable no-undef */
function getConfig(headers?: THeaders): RequestInit {
  return {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };
}

async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('Could not load info.');
  }
  return response.json().catch(() => { throw new Error('Error while getting response'); });
}

async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'GET', ...config };
  return http<T>(path, init);
}

async function post<T, U>(
  path: string,
  body: T,
  config: RequestInit,
): Promise<U> {
  const init = { method: 'POST', body: JSON.stringify(body), ...config };
  return http<U>(path, init);
}

export { get, post, getConfig };
