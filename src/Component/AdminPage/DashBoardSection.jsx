import PropTypes from 'prop-types';

const DashBoardSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" />
                <StatCard title="Orders" value="+2350" change="+180.1% from last month" />
                <StatCard title="Products" value="+12,234" change="+19% from last month" />
                <StatCard title="Active Now" value="+573" change="+201 since last hour" />
            </div>
            <div className="mt-8">
                <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Recent Orders</h3>
                    <p className="text-gray-400 mb-4">You have 265 orders this month.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400 text-sm uppercase">
                                    <th className="py-3 px-4">Order</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Customer</th>
                                    <th className="py-3 px-4">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <OrderRow id="#3210" status="Shipped" customer="Olivia Martin" amount="$79.00" />
                                <OrderRow id="#3209" status="Processing" customer="Ava Johnson" amount="$149.00" />
                                <OrderRow id="#3208" status="Cancelled" customer="Michael Johnson" amount="$59.00" />
                                <OrderRow id="#3207" status="Shipped" customer="Lisa Anderson" amount="$39.00" />
                                <OrderRow id="#3206" status="Shipped" customer="Richard Davis" amount="$89.00" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

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

const StatCard = ({ title, value, change }) => (
    <div className="bg-gray-900 rounded-lg p-6">
        <h4 className="text-gray-400 text-sm mb-2">{title}</h4>
        <p className="text-2xl font-bold mb-2">{value}</p>
        <p className="text-sm text-green-400">{change}</p>
    </div>
);

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

export default DashBoardSection