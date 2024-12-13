import { collection, getDocs, query, where } from 'firebase/firestore';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { db } from '../../Firebase/FirebaseConfig';

const CustomerSection = () => {

    const [customer, setCustomer] = useState([]);

    async function getUsersWithRoleFalse() {
        try {
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('isRole', '==', false));
            const snapshot = await getDocs(q);

            const users = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCustomer(users);
            console.log(customer); // This will log the users with role set to false
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    useEffect(() => {
        getUsersWithRoleFalse();
    }, [])

    return (
        <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Customers Management</h3>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-400 text-sm uppercase">
                            <th className="py-3 px-4">Customer ID</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Total Orders</th>
                            <th className="py-3 px-4">Total Spent</th>
                        </tr>
                    </thead>
                    {customer.map((user, i) => (
                        <tbody key={i}>
                            <CustomerRow id={i+1000} name={user.name} email={user.email} totalOrders={5} totalSpent="$345.00" />
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

const CustomerRow = ({ id, name, email, totalOrders, totalSpent }) => (
    <tr className="border-t border-gray-800">
        <td className="py-4 px-4">{id}</td>
        <td className="py-4 px-4">{name}</td>
        <td className="py-4 px-4">{email}</td>
        <td className="py-4 px-4">{totalOrders}</td>
        <td className="py-4 px-4">{totalSpent}</td>
    </tr>
);

CustomerRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    totalOrders: PropTypes.number.isRequired,
    totalSpent: PropTypes.string.isRequired,
};

export default CustomerSection;

