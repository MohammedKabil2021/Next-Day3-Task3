import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    providers: [Google({
        clientId: process.env.AUTHCLIENT_ID,
        clientSecret: process.env.AUTHCLIENT_SECRET,
        authorization: {
            params: {
                prompt: "select_account",       //make the provider if sign out and try sign again show goolg login mail choice
                // access_type: "offline",        //this make the token refreshed
                // response_type: "code",         // this is the default value but we can add it to make it clear
            },
        },
    }),],
});