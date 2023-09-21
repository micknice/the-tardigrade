import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Auth0Provider from "@auth0/nextjs-auth0";

export default NextAuth({
  providers: [
    // Auth0 provider
    Auth0Provider({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    }),
  ],
});
