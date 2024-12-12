import PropTypes from 'prop-types';

const OrderSection = () => {
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
                            <th className="py-3 px-4">Total</th>
                            <th className="py-3 px-4">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <OrderRow id="#3210" customer="Olivia Martin" status="Shipped" total="$79.00" date="2023-05-15" />
                        <OrderRow id="#3209" customer="Ava Johnson" status="Processing" total="$149.00" date="2023-05-14" />
                        <OrderRow id="#3208" customer="Michael Johnson" status="Cancelled" total="$59.00" date="2023-05-13" />
                        <OrderRow id="#3207" customer="Lisa Anderson" status="Shipped" total="$39.00" date="2023-05-12" />
                        <OrderRow id="#3206" customer="Richard Davis" status="Shipped" total="$89.00" date="2023-05-11" />
                    </tbody>
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
    id: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
export default OrderSection;

