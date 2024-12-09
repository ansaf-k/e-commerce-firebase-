import { Search, User, ShoppingBag } from 'lucide-react';
import PropTypes from 'prop-types'

function Navbar() {

    return (
        <div className="fixed w-full z-50">

            {/* Main Navigation */}
            <nav className="bg-opacity-0 bg-gradient-to-b from-zinc-950 to-transparent text-white">
                <div className="container mx-auto px-4">
                    <div className="h-16 flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="text-2xl font-bold tracking-wider">
                            LUSTRE
                        </a>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink href="/new">New</NavLink>
                            <NavLink href="/men">Men</NavLink>
                            <NavLink href="/women">Women</NavLink>
                            <NavLink href="/accessories">Accessories</NavLink>
                            <NavLink href="/archive">Archive</NavLink>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-6">
                            <button className="hover:text-gray-300 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <a href="/login" className="hover:text-gray-300 transition-colors">
                                <User className="w-5 h-5" />
                            </a>
                            <a href="/cart" className="hover:text-gray-300 transition-colors">
                                <ShoppingBag className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
        >
            {children}
        </a>
    );
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Navbar;

