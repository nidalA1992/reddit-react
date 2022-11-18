import { AxiosRequestConfig } from 'axios';

export function axiosOptions (
  token: string | null, 
  after?: string): AxiosRequestConfig| undefined {

  const options = {
    baseURL: 'https://oauth.reddit.com/', 
  }

  if (!token) return options;
  
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`
    },
    params: { limit: 10, after }
  }

  return {...options, ...headers};
}
