import {Navigation} from "./Navigation";


const navItems = [
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Users", href: "/users"}
]


const Header = () => {

    return (
        <header>
            <strong>Learn NEXT</strong>
            <nav>
                <Navigation navItems={navItems}/>
            </nav>
        </header>
    );
};

export default Header;