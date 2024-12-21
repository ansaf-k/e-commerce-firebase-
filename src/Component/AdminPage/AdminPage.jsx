import { Bell, LogOut, Package, ShoppingCart, Users } from 'lucide-react';
import PropTypes from 'prop-types';
import '../../style/AdminDashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderSection from './OrderSection';
import ProductsSection from './ProductsSection';
import CustomerSection from './CustomerSection';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/FirebaseConfig';

const StatCard = ({ title, value, change }) => (
    <div className="bg-gray-900 rounded-lg p-6">
        <h4 className="text-gray-400 text-sm mb-2">{title}</h4>
        <p className="text-2xl font-bold mb-2">{value}</p>
        <p className="text-sm text-green-400">{change}</p>
    </div>
);

const NavItem = ({ icon: Icon, label, onClick, active }) => (
    <Link
        href="#"
        className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 ${active ? 'bg-gray-800' : ''}`}
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
    >
        <Icon className="mr-3" size={20} />
        {label}
    </Link>
);
const OrderRow = ({ id, status, customer, amount }) => (
    <tr className="border-t border-gray-800">
        <td className="py-4 px-4">{id}</td>
        <td className="py-4 px-4">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${status === 'Shipped' ? 'bg-green-200 text-green-800' :
                status === 'Processing' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                }`}>
                {status}
            </span>
        </td>
        <td className="py-4 px-4">{customer}</td>
        <td className="py-4 px-4">{amount}</td>
    </tr>
);
const AdminPage = () => {

    const [activeSection, setActiveSection] = useState('orders');
    const [productDetail, setProductDetail] = useState();
    const navigate = useNavigate();

    const LogOutHandler = () => {
        signOut(auth).then(() => {
            console.log('logged out');
            navigate('/');
        });
    }

    const getUserDataById = async (id) => {
        try {
            const docRef = doc(db, 'users', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log('User Data:', docSnap.data());
                setProductDetail(docSnap.data()); // Returns the user data
                console.log(docSnap.data());
            } else {
                console.log('No such user document!');
                return null;
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'orders':
                return <OrderSection />;
            case 'products':
                return <ProductsSection />;
            case 'customers':
                return <CustomerSection />;
            default:
                return <OrderSection />;
        }
    };

    useEffect(() => {
        getUserDataById();
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            getUserDataById(user.uid);
        })
    },[]);
    return (
        <>
            <div className="flex h-screen bg-black text-white font-sans">
                {/* Sidebar */}
                < aside className="w-64 border-r border-gray-800">
                    <div className="p-6">
                        <h1 className="text-3xl font-bold">LUSTRE</h1>
                        <p className="text-sm text-gray-400">Admin Dashboard</p>
                    </div>
                    <nav className="mt-6">
                        <NavItem icon={ShoppingCart} label="Orders" onClick={() => setActiveSection('orders')} active={activeSection === 'orders'} />
                        <NavItem icon={Package} label="Products" onClick={() => setActiveSection('products')} active={activeSection === 'products'} />
                        <NavItem icon={Users} label="Customers" onClick={() => setActiveSection('customers')} active={activeSection === 'customers'} />
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    {/* Header */}
                    <header className="flex items-center justify-between border-b border-gray-800 p-6">
                        <h2 className="text-2xl font-bold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-white">
                                <Bell size={20} />
                            </button>
                            <div className="flex items-center cursor-pointer bg-slate-700 p-2 rounded-3xl">
                                <p>{productDetail?.name}</p>
                            </div>
                            <button onClick={LogOutHandler} className="p-2 text-gray-400 hover:text-white">
                                <LogOut size={20} />
                            </button>
                        </div>
                    </header>

                    {/* Section Content */}
                    <div className="p-6">
                        {renderSection()}
                    </div>
                </main>
            </div>
        </>
    );
};


OrderRow.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
};

StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
};

NavItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default AdminPage