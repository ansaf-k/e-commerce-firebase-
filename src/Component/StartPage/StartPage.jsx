import { ShoppingBag, User } from 'lucide-react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Banner from '../Banner';


function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            {children}
        </a>
    );
}
const StartPage = () => {

    return (
        <>
            <div className="fixed w-full z-50">

                <nav className="bg-opacity-0 text-white">
                    <div className="container mx-auto px-4">
                        <div className="h-16 flex p-3 items-center justify-between">
                            <Link to="/" className="text-4xl font-bold tracking-wider">
                                LUSTRE
                            </Link>

                            <div className="hidden md:flex items-center space-x-8">
                                <NavLink href="/login">Men</NavLink>
                                <NavLink href="/login">Women</NavLink>
                                <NavLink href="/login">Accessories</NavLink>
                            </div>

                            <div className="flex items-center space-x-6">
                                <Link to="/login" className="hover:text-gray-300 transition-colors">
                                    <User className="w-5 h-5" />
                                </Link>
                                <Link to="/login" className="hover:text-gray-300 transition-colors">
                                    <ShoppingBag className="w-5 h-5" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            <Banner />
        </>
    )
}
NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default StartPage