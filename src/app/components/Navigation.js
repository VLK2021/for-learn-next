"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession, signOut} from "next-auth/react";


const Navigation = ({navItems}) => {
    const pathname = usePathname();
    const session = useSession();


    return <>
        {navItems.map((link) => {
            const isActive = pathname === link.href;

            return (
                <Link key={link.label} href={link.href} className={isActive ? "active" : ""}>
                    {link.label}
                </Link>
            )
        })}

        {session?.data && (
            <Link href={'/profile'}>Profile</Link>
        )}

        {session?.data ? <Link href={'#'}
                               onClick={() => signOut({callbackUrl: '/'})}
            >Sign Out</Link> :
            <Link href={'/api/auth/signin'}>Sign In</Link>}
    </>
}

export {Navigation};