import { signOut } from '@/contexts/AuthContext';
import { AuthTokenError } from '@/errors/AuthTokenError';
import axios from 'axios';
import { parseCookies } from 'nookies';

export const setupAPIClient = (ctx = undefined) => {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies['@savingpets-auth.token']}`,
    },
  });

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401) {
        // 401 - não autorizado
        if (typeof window !== undefined) {
          // deslogar o usuário
          signOut();
        } else {
          return Promise.reject(
            new AuthTokenError('Error with authentication token.'),
          );
        }
      }

      return Promise.reject(error);
    },
  );

  return api;
};
