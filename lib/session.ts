import { NextAuthOptions, User, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';
import { Session } from 'inspector';
import { SessionInterface } from '@/app/types/common.types';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // jwt: {
  //   encode({ secret, token }) {},

  //   decode({ secret, token }) {},
  // },

  theme: {
    colorScheme: 'light',
    logo: '/logo.png',
  },
  callbacks: {
    async session({ session }) {
      return session;
    },

    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
}
