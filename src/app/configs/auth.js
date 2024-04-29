import GoogleProvider from "next-auth/providers/google";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";



export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ]
}