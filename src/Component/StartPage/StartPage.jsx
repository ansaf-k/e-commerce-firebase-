import PropTypes from 'prop-types'
import Banner from '../Banner';
import Navbar from '../Navbar';


function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            {children}
        </a>
    );
}
const StartPage = () => {

    return (
        <>
            <Navbar />
            <Banner />
        </>
    )
}
NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default StartPage