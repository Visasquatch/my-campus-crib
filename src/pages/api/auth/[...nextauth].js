import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    AzureADB2CProvider({
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
      tenantId: process.env.mycampuscrib.onmicrosoft.com,
      authorizationUrl: 'https://mycampuscrib.b2clogin.com/mycampuscrib.onmicrosoft.com/oauth2/v2.0/authorize',
      callbackUrl: 'https://my-campus-crib.vercel.app/api/auth/callback/azure-ad-b2c',
    }),
  ],
  pages: {
    error: '/auth/error',  // Customize error page if needed
  },
});

