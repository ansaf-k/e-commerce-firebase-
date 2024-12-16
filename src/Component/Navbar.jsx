import { signOut } from 'firebase/auth';
import { User, Search, ShoppingBag, LogOut } from 'lucide-react';
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/FirebaseConfig';

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            {children}
        </a>
    );
}

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const HandleButtonCart = () => {
        if (location.pathname === '/') {
            navigate('/login');
        } else {
            navigate('/cart');
        }
    }

    const LogoutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out.');
                navigate('/login');
            })
            .catch((error) => {
                alert('Error signing out:', error);
                navigate('/login');
            });
    };

    const HandleButtonClick = () => {
        if (location.pathname === '/') {
            navigate('/login');
        } else {
            navigate('/home');
        }
    };

    return (
        <>
            <div className="fixed backdrop-filter backdrop-blur-sm w-full z-50">

                <nav className="bg-opacity-0 text-white">
                    <div className="container mx-auto px-4">
                        <div className="h-20 flex p-3 items-center justify-between">

                            <a href="/home" className="text-4xl font-bold tracking-wider">
                                LUSTRE
                            </a>

                            <div className="hidden md:flex items-center space-x-8">
                                <NavLink href="/men">Men</NavLink>
                                <NavLink href="/women">Women</NavLink>
                                <NavLink href="/orders">orders</NavLink>
                                <NavLink href="/archive">Wishlist</NavLink>
                            </div>

                            <div className="flex items-center space-x-6">
                                <button className="hover:text-gray-300 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                                <button onClick={HandleButtonClick} className="hover:text-gray-300 transition-colors">
                                    <User className="w-5 h-5" />
                                </button>
                                <button onClick={HandleButtonCart} className="hover:text-gray-300 transition-colors">
                                    <ShoppingBag className="w-5 h-5" />
                                </button>
                                <button onClick={LogoutHandler} className="hover:text-gray-300 transition-colors">
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}



NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Navbar;

