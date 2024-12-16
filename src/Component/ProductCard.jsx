import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../Firebase/FirebaseConfig";
import React ,{ useEffect, useState } from "react";
import { getAuth } from "firebase/auth";


const ProductCard = React.forwardRef((props, ref) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user?.uid;
    
    const [allProduct, setAllProduct] = useState([]);
    const getProducts = async () => {
        const snapshot = await getDocs(collection(db, "Products"));
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllProduct(productsData);
        console.log(allProduct);
    };

    const addToCart = async (product) => {
        if (uid) {
            const productDetails = {
                name: product.name,
                price: product.price,
                category: product.category,
                img: product.img,
                quantity: 1,
            };
            const cartRef = doc(db, "users", uid, "cart", product.id);
            await setDoc(cartRef, productDetails);
            console.log("Product added to cart");
        } else {
            alert("Please login to add items to cart");
        }
    };
    
    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <div ref={ref} className="flex">
            {allProduct.map((item, index) => (
                <div
                    key={index}
                    className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                    >
                    <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                        <img className="object-cover" src={item.img} alt="product" />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                            39% OFF
                        </span>
                    </Link>
                    <div className="mt-4 px-5 pb-5">
                        <Link href="#">
                            <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
                        </Link>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">
                                    ${item.price}
                                </span>
                                <span className="text-sm text-slate-900 line-through">
                                    ${item.price}
                                </span>
                            </p>
                        </div>
                        <button
                            onClick={() => addToCart(item)}
                            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
       </div>
    );
});

//complete this first

ProductCard.displayName = "ProductCard";
export default ProductCard;