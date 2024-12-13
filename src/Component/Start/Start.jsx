import Banner from "../Banner"
import Footer from "../Footer"
import Navbar from "../Navbar"
import "../../style/Start.css"

const Start = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* Start Page Content */}
      <div className="glow bg-black container">
        {/* <div className="h-[50vh]">
          <h1 className="text-orange-50 flex items-center justify-center text-[50vh] leading-none">LUSTRE &nbsp;&nbsp;-&nbsp;&nbsp; THE FASHION </h1>
        </div> */}
       <div className="mx-20 pt-10">
          <div className="inline-flex">
           <div className="flex">
              <div className="bg-cover w-[50vh] h-[50vh] row-1">
              </div>
                <p className="flex pl-2 items-end text-white uppercase text-xs">zara<br/>jacket</p>
           </div>
           <div className="flex">
              <div className="bg-cover w-[50vh] h-[50vh] row-1">
              </div>
                <p className="flex pl-2 items-end text-white uppercase text-xs">zara<br/>jacket</p>
           </div>
            <div>
            </div>
          </div>
       </div>
      </div>
      <Footer />
    </>
  )
}

export default Start