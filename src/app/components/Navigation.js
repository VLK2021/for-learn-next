"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";


const Navigation = ({navItems}) => {
    const pathname = usePathname();


    return <>
        {navItems.map((link) => {
            const isActive = pathname === link.href;

            return(
                <Link key={link.label} href={link.href} className={isActive ? "active" : ""}>
                    {link.label}
                </Link>
            )
        })}
    </>
}

export {Navigation};