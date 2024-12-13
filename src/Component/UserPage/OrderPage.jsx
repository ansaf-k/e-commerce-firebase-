import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../Navbar";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Firebase/FirebaseConfig";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const OrderPage = () => {

    const [allCart, setAllCart] = useState([]);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const fetchOrders = async () => {
            if (currentUser) {
                try {
                    const cartRef = collection(db, "users", currentUser, "orders");
                    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
                        const cartData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        setAllCart(cartData);
                    });

                    return () => unsubscribe(); // Cleanup on component unmount
                } catch (error) {
                    console.error("Error fetching orders:", error);
                    alert("An error occurred while fetching your orders. Please try again.");
                }
            }
        };

        console.log(allCart);
        fetchOrders();
    }, [currentUser]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user.id);
        })
    }, []);

    return (
        <>
            <Navbar />
            <div className="pt-24 min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order History</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">All Orders</p>
                        </div>
                    </div>
                    <div className="px-6 py-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-separate border-spacing-y-4">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                        <th className="pb-3">Product</th>
                                        <th className="pb-3 text-right">Category</th>
                                        <th className="pb-3 text-right">Status</th>
                                        <th className="pb-3 text-right">Time</th>
                                        <th className="pb-3 text-right">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allCart.map((order) => (
                                        <tr key={order.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                                            <td className="py-4 pl-6">
                                                <div className="flex items-center">
                                                    <img src={order.img} alt={order.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                                                    <span className="font-semibold text-gray-900 dark:text-white">{order.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-right text-gray-600 dark:text-gray-300">{order.category}</td>
                                            <td className="py-4 text-right">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                                        order.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                                            order.status === 'In Review' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                                                'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-4 text-right text-gray-600 dark:text-gray-300">{order.time}</td>
                                            <td className="py-4 pr-6 text-right">
                                                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none">
                                                    <ChevronRight className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderPage;