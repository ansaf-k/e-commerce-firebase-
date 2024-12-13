import Banner from "../Banner"
import Footer from "../Footer"
import Navbar from "../Navbar"

const Start = () => {
  return (
    <>
    <Navbar />
    <Banner />
    {/* Start Page Content */}
    <div className="glow bg-black container">
        <h1 className="text-orange-50 text-[190px] leading-none">LUXART</h1>
    </div>
    <Footer />
    </>
  )
}

export default Start