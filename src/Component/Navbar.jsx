import {  User, Search, ShoppingBag } from 'lucide-react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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
    return (
        <>
            <div className="fixed w-full z-50">

                <nav className="bg-opacity-0 text-white">
                    <div className="container mx-auto px-4">
                        <div className="h-16 flex p-3 items-center justify-between">
                
                            <a href="/" className="text-4xl font-bold tracking-wider">
                                LUSTRE
                            </a>

                            <div className="hidden md:flex items-center space-x-8">
                                <NavLink href="/new">New</NavLink>
                                <NavLink href="/men">Men</NavLink>
                                <NavLink href="/women">Women</NavLink>
                                <NavLink href="/accessories">Accessories</NavLink>
                                <NavLink href="/archive">Archive</NavLink>
                            </div>

                            <div className="flex items-center space-x-6">
                                <button className="hover:text-gray-300 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                                <Link to="/login" className="hover:text-gray-300 transition-colors">
                                    <User className="w-5 h-5" />
                                </Link>
                                <Link to="/cart" className="hover:text-gray-300 transition-colors">
                                    <ShoppingBag className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>



            {/* <div className="fixed w-full z-50">

                <nav className="bg-opacity-0 text-white">
                    <div className="container mx-auto px-4">
                        <div className="h-16 flex p-3 items-center justify-between">
                            <Link to="/" className="text-4xl font-bold tracking-wider">
                                LUSTRE
                            </Link>

                            <div className="hidden md:flex items-center space-x-6">
                                <NavLink href="/admin/add-product">
                                    Add Product
                                </NavLink>
                                <NavLink href="/admin/orders">
                                    Products
                                </NavLink>
                            </div>

                            <div className="flex items-center space-x-6">
                                <Link to="/login" className="hover:text-gray-300 transition-colors">
                                    <User className="w-5 h-5" />
                                </Link>
                                <Link to="/cart" className="hover:text-gray-300 transition-colors">
                                    <Plus className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button className="hover:text-gray-300 transition-colors">
                                    <LogOut className="w-5 h-5" />
                                </button>
                                <button
                                    className="md:hidden hover:text-gray-300 transition-colors"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {isOpen && (
                    <div className="md:hidden bg-transparent text-white">
                        <div className="container mx-auto px-4 py-2">
                            <NavLink href="/admin/add-product">
                                Add Product
                            </NavLink><br />
                            <NavLink href="/admin/inventory">
                                Inventory
                            </NavLink><br />
                            <NavLink href="/admin/orders">
                                Products
                            </NavLink><br />
                            <NavLink href="/admin/analytics">
                                Analytics
                            </NavLink>
                        </div>
                    </div>
                )}
            </div> */}
        </>
    );
}



NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Navbar;

