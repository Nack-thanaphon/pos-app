import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Add more providers here
  ],
  // Optional: Add custom pages
  pages: {
    signIn: '/auth/signin',
  },
  // Optional: Add callbacks
  callbacks: {
    async session({ session, token }: { session: Session, token: JWT }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }: { token: JWT, user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };