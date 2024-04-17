import {Poppins} from "next/font/google";
import './style.css';


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ["latin"]
});


export const metadata = {
    title: "Block Users",
    description: "Generated by create next app",
};


export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <h1>BLOCK USERS</h1>

                {children}
            </body>
        </html>
    );
}
