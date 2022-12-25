import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID) {
  throw Error('Missing required environment variable GOOGLE_CLIENT_ID');
}

if (!GOOGLE_CLIENT_SECRET) {
  throw Error('Missing required environment variable GOOGLE_CLIENT_SECRET');
}

const ALLOWED_EMAILS = ['jorgenwilhelmsen1@gmail.com'];

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return ALLOWED_EMAILS.includes(user.email || '');
    },
  },
});
