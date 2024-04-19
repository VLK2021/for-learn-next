import Link from "next/link";


const Header = () => {
    return (
        <header>
            <strong>Learn NEXT</strong>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/users'}>users</Link>
            </nav>
        </header>
    );
};

export default Header;