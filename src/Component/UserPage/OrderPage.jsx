import { getAuth } from "firebase/auth";
import Navbar from "../Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const OrderPage = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user?.uid;
    const [allCart, setAllCart] = useState([]);

    const getOrders = async () => {
        if (uid) {
            const cartRef = collection(db, "users", uid, "orders");
            const snapshot = await getDocs(cartRef);
            const cartData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAllCart(cartData);
            console.log(allCart);
        } else {
            alert("Please login to view your cart");
        }
    }

    useEffect(() => {
        getOrders();
    },[]);

    return (
        <>
            <Navbar />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css" />
            <div className="flex pt-16 flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">

                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-dark">Projects Deliveries</span>
                                    <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span>
                                </h3>
                                <div className="relative flex flex-wrap items-center my-2">
                                    <a href="javascript:void(0)" className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a>
                                </div>
                            </div>

                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[175px]">PRODUCT</th>
                                                <th className="pb-3 text-end min-w-[100px]">CATEGORY</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">PRICE</th>
                                                <th className="pb-3 pr-12 text-end min-w-[100px]">TIME</th>
                                                <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-dashed last:border-b-0">
                                                <td className="p-3 pl-0">
                                                    <div className="flex items-center">
                                                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-start">
                                                            <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Social Media API </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="font-semibold text-light-inverse text-md/normal">Olivia Cambell</span>
                                                </td>
                                                <td className="p-3 pr-12 text-end">
                                                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"> In Progress </span>
                                                </td>
                                                <td className="pr-0 text-center">
                                                    <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                        <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                            <ChevronRight className="flex items-center justify-center p-0 m-0 leading-none shrink-0"/>
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                    <p className="text-sm text-slate-500 py-1"> Tailwind CSS Component from <a href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-900" target="_blank">Riva Dashboard</a> by <a href="https://www.loopple.com" className="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>. </p>
                </div>
            </div>
        </>
    )
}

export default OrderPage;