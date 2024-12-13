// import { getAuth } from "firebase/auth";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
// import { LogOut, Plus, ShoppingBag, User } from "lucide-react";
// import { useEffect, useState } from "react";

// function NavLink({ href, children }) {
//     return (
//         <a
//             href={href}
//             className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
//             {children}
//         </a>
//     );
// }
// const DashboardNavbar = () => {
//     const [userId, setUserId] = useState();
//     // const navigate = useNavigate();

//     const auth = getAuth();
//     const user = auth.currentUser;

//     useEffect(() => {
//         if (user) {
//             setUserId(user.uid || 'User ');
//         }
//     }, [user]);


//     return (
//         <>
//             <div className="fixed w-full z-50">

//                 <nav className="bg-opacity-0 text-white">
//                     <div className="container mx-auto px-4">
//                         <div className="h-16 flex p-3 items-center justify-between">

//                             <a href="/" className="text-4xl font-bold tracking-wider">
//                                 LUSTRE
//                             </a>

//                             <div className="hidden md:flex items-center space-x-8">
//                                 <NavLink href="/admin/add-product">Add Product</NavLink>
//                                 <NavLink href="/admin/products">Products</NavLink>
//                             </div>

//                             <div className="flex items-center space-x-6">
//                                 <button className="hover:text-gray-300 transition-colors">
//                                     <Plus className="w-5 h-5" />
//                                 </button>
//                                 <Link to={`/admin/${userId}`} className="hover:text-gray-300 transition-colors">
//                                     <User className="w-5 h-5" />
//                                     {userId && (
//                                         <p>{userId}</p>
//                                     )}
//                                 </Link>
//                                 <Link to="/cart" className="hover:text-gray-300 transition-colors">
//                                     <ShoppingBag className="w-5 h-5" />
//                                 </Link>
//                                 <Link className="hover:text-gray-300 transition-colors">
//                                     <LogOut className="w-5 h-5" />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }

// NavLink.propTypes = {
//     href: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
// };

// export default DashboardNavbar