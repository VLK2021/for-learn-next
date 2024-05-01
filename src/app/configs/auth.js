import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";



export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true},
            }
        }),
    ]
}