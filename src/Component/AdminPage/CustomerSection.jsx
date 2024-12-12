import PropTypes from 'prop-types';

const CustomerSection = () => {
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
                    <tbody>
                        <CustomerRow id="C001" name="Olivia Martin" email="olivia@example.com" totalOrders={5} totalSpent="$345.00" />
                        <CustomerRow id="C002" name="Ava Johnson" email="ava@example.com" totalOrders={3} totalSpent="$210.00" />
                        <CustomerRow id="C003" name="Michael Johnson" email="michael@example.com" totalOrders={7} totalSpent="$560.00" />
                        <CustomerRow id="C004" name="Lisa Anderson" email="lisa@example.com" totalOrders={2} totalSpent="$120.00" />
                        <CustomerRow id="C005" name="Richard Davis" email="richard@example.com" totalOrders={4} totalSpent="$290.00" />
                    </tbody>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    totalOrders: PropTypes.number.isRequired,
    totalSpent: PropTypes.string.isRequired,
};

export default CustomerSection;

