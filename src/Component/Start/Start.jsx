import Banner from "../Banner"
import Navbar from "../Navbar"
import "../../style/Start.css"

const Start = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* Start Page Content */}
      <div className="glow w-full bg-black container">
        <div className="mx-5 pt-5">
          <div className="flex justify-between w-full">
            <div className="flex row-1 flex-col justify-end bg-cover w-[50vh] h-[50vh] relative">
            </div>
            <div className="flex row-2 flex-col justify-end bg-cover w-[70vh] h-[70vh] relative">
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="w-full pt-40 px-52">
            <img className="w-full h-[30vh] object-cover object-top transition-all duration-300 hover:object-center" src="./src/assets/banner.jpg" alt="" />
          </div>
          <div className="w-full px-52">
            <img className="w-full h-[30vh] object-cover object-bottom transition-all duration-300 hover:object-center" src="./src/assets/banner4.jpg" alt="" />
          </div>
          <div className="w-full px-52">
            <img className="w-full h-[30vh] object-cover object-center transition-all duration-300 hover:object-bottom" src="./src/assets/banner2.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Start