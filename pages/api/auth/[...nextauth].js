import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Userlogin } from "../../../src/services/user-login-service/user-login-services";
export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const response = await Userlogin(credentials);
                const { user } = await response?.data;
                return {
                    token: user?.accessToken,
                    email: user?.email,
                    name: user?.firstname + " " + user?.lastname,
                    userId: user?._id,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },
        async session({ session, token, user }) {
            session.user = token.user;
            return session;
        },
    },
    secret: process.env.WOMEYN_SECRET_KEY,
});