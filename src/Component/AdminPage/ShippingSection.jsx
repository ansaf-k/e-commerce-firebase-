import PropTypes from 'prop-types';


const ShippingSection = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Shipping Management</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm uppercase">
              <th className="py-3 px-4">Shipping ID</th>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Tracking Number</th>
            </tr>
          </thead>
          <tbody>
            <ShippingRow id="S001" orderId="#3210" customer="Olivia Martin" status="In Transit" trackingNumber="1Z999AA1123456784" />
            <ShippingRow id="S002" orderId="#3209" customer="Ava Johnson" status="Processing" trackingNumber="Pending" />
            <ShippingRow id="S003" orderId="#3207" customer="Lisa Anderson" status="Delivered" trackingNumber="1Z999AA1123456785" />
            <ShippingRow id="S004" orderId="#3206" customer="Richard Davis" status="Shipped" trackingNumber="1Z999AA1123456786" />
            <ShippingRow id="S005" orderId="#3205" customer="Emma Wilson" status="Processing" trackingNumber="Pending" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ShippingRow = ({ id, orderId, customer, status, trackingNumber }) => (
  <tr className="border-t border-gray-800">
    <td className="py-4 px-4">{id}</td>
    <td className="py-4 px-4">{orderId}</td>
    <td className="py-4 px-4">{customer}</td>
    <td className="py-4 px-4">
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
        status === 'In Transit' ? 'bg-blue-200 text-blue-800' :
        status === 'Processing' ? 'bg-yellow-200 text-yellow-800' :
        status === 'Delivered' ? 'bg-green-200 text-green-800' :
        'bg-purple-200 text-purple-800'
      }`}>
        {status}
      </span>
    </td>
    <td className="py-4 px-4">{trackingNumber}</td>
  </tr>
);

ShippingRow.propTypes = {
    id: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  trackingNumber: PropTypes.string.isRequired,
};

export default ShippingSection;

