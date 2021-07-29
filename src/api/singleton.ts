let instance: Singleton | null = null;

class Singleton {
  url: string;

  constructor(BASE_URL: string) {
    if (!instance) {
      instance = this;
    }

    this.url = BASE_URL;

    return instance;
  }

  static getConfig(method: string, body: string, headers: any = {}) {
    return {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body,
    };
  }

  async getData(endpoint = '', message = 'A error has ocurred') {
    const response = await fetch(`${this.url}${endpoint}`);

    if (!response.ok) {
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  }

  // async postData(endpoint = '', data = {}, headers = {}, message = 'A error has ocurred') {
  //   const response = await fetch(`${this.url}${endpoint}`,
  //     Singleton.getConfig('POST', JSON.stringify(data), headers));

  //   if (!response.ok) {
  //     throw new Error(message);
  //   }

  //   return response.json();
  // }
}

export default Singleton;
