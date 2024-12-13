import { collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';
import { db } from '../../Firebase/FirebaseConfig';
import { useEffect, useState } from 'react';

const OrderSection = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const snapshot = await getDocs(collection(db, "buyer",));
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(productsData);
        console.log(orders);
    }

    useEffect(() => {
        getOrders()
    }, []);

    return (
        <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Orders Management</h3>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-400 text-sm uppercase">
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">Date</th>
                        </tr>
                    </thead>
                    {orders.map((order, i) => (
                        <tbody key={i}>
                            <OrderRow id={i + 1000} customer={order.email} status={order.status || 'Processing'} total={order.price} date={order.time} />
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

const OrderRow = ({ id, customer, status, total, date }) => (
    <tr className="border-t border-gray-800">
        <td className="py-4 px-4">{id}</td>
        <td className="py-4 px-4">{customer}</td>
        <td className="py-4 px-4">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${status === 'Shipped' ? 'bg-green-200 text-green-800' :
                status === 'Processing' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                }`}>
                {status}
            </span>
        </td>
        <td className="py-4 px-4">{total}</td>
        <td className="py-4 px-4">{date}</td>
    </tr>
);

OrderRow.propTypes = {
    id: PropTypes.number.isRequired,
    customer: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
export default OrderSection;