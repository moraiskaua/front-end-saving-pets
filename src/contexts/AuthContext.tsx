import { api } from '@/services/apiClient';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { ReactNode, createContext, useEffect, useState } from 'react';

type UserProps = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  createdAt?: Date;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
};

type AuthContextProps = {
  user: UserProps;
  isAuthenticated: boolean;
  signUp: (data: SignUpProps) => Promise<void>;
  signIn: (data: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextProps);

export const signOut = async () => {
  try {
    destroyCookie(undefined, '@savingpets-auth.token');
    destroyCookie(undefined, '@savingpets-auth.userId');
    window.location.reload();
  } catch (error) {}
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>();
  const router = useRouter();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@savingpets-auth.token': token } = parseCookies();
    const { '@savingpets-auth.userId': userId } = parseCookies();

    if (token) {
      api
        .get(`/users/${userId}`)
        .then(response => {
          const { id, name, email, cpf, phone, createdAt } = response.data.data;

          setUser({
            id,
            name,
            email,
            cpf,
            phone,
            createdAt,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  const signUp = async ({ name, email, password, cpf, phone }: SignUpProps) => {
    try {
      await api.post('/users', {
        name,
        email,
        password,
        cpf,
        phone,
      });

      router.push('/login');
    } catch (error) {}
  };

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      const response = await api.post('/users/login', {
        email,
        password,
      });

      setCookie(
        undefined,
        '@savingpets-auth.token',
        response.data.accessToken,
        {
          maxAge: 60 * 60 * 24 * 3, // Expires in 3 days,
        },
      );

      setCookie(undefined, '@savingpets-auth.userId', response.data.userId, {
        maxAge: 60 * 60 * 24 * 3, // Expires in 3 days,
      });

      api.defaults.headers[
        'Authorization'
      ] = `Bearer ${response.data.accessToken}`;

      api.get(`/users/${response.data.userId}`).then(response => {
        const { id, name, email, cpf, phone, createdAt } = response.data.data;

        setUser({
          id,
          name,
          email,
          cpf,
          phone,
          createdAt,
        });
      });

      router.back();
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user: user!,
        isAuthenticated,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
