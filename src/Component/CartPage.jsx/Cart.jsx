import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../Navbar"
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/FirebaseConfig";
import { X } from "lucide-react";

const Cart = () => {

  const [allCart, setAllCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState();

  const getCurrentTime = () => {
    // Extract time components
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    console.log(formattedDate);


    return formattedDate;
  };

  console.log('Current Time:', getCurrentTime());

  const getCarts = async () => {
    if (currentUser ) {
      try {
        const cartRef = collection(db, "users", currentUser , "cart");
        const snapshot = await getDocs(cartRef);
        const cartData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllCart(cartData);
        calculateSubtotal(cartData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
  }

  const handleRemoveCartItem = async (itemId) => {
    if (currentUser) {
      const cartRef = doc(db, "users", currentUser, "cart", itemId);
      await deleteDoc(cartRef);
      alert("Item removed from cart");
      getCarts();
    } else {
      alert("Please login to remove items from cart");
    }
  }

  const HandleOrder = async () => {
    if (currentUser) {
      const cartRef = collection(db, "users", currentUser, "orders");
      const buyerRef = collection(db, "buyer",);

      allCart.forEach(async (item) => {
        const orderDetails = {
          name: item.name,
          price: item.price,
          category: item.category,
          img: item.img,
          quantity: item.quantity,
          time: getCurrentTime(),
          email: email,
          buyerId: currentUser,
          status: 'pending'
        };

        await setDoc(doc(cartRef, item.id), orderDetails);
        await setDoc(doc(buyerRef, item.id), orderDetails);
      })

      alert("Order placed successfully");
      // Clear the cart after the order is placed
      allCart.forEach(async (product) => {
        const cartItemRef = doc(db, "users", currentUser, "cart", product.id);
        await deleteDoc(cartItemRef);
      });

      getCarts();
    }
  }

  const calculateSubtotal = (cartItems) => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += parseFloat(item.price);
    });
    setSubtotal(subtotal);
    setTotal(subtotal + 8); // Add shipping cost to the subtotal
  }

  const HandleQuantity = async (itemId, value) => {
    if (currentUser) {
      const cartRef = doc(db, "users", currentUser, "cart", itemId);
      const cartItem = allCart.find((item) => item.id === itemId);

      if (value === "increment") {
        await updateDoc(cartRef, { quantity: cartItem.quantity + 1 });
      } else if (value === "decrement" && cartItem.quantity > 1) {
        await updateDoc(cartRef, { quantity: cartItem.quantity - 1 });
      }

      getCarts();
    } else {
      alert("Please login to update quantities");
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user.uid);
      setEmail(user.email);
    })
  }, []);

  useEffect(() => {
    if (currentUser) {
      getCarts();
    }
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <section className=" p-20 bg-black py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-white">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-gray-300 shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {allCart.map((item, index) => (

                      <li key={index} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0">
                          <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.img} alt="" />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">{item.name}</p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                            </div>
                            <button onClick={() => HandleOrder(item)}>Buy now</button>
                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${item.price}</p>

                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button onClick={() => HandleQuantity(item.id, "decrement")} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity}</div>
                                  <button onClick={() => HandleQuantity(item.id, "increment")} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button onClick={() => handleRemoveCartItem(item.id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">$8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> {total.toFixed(2)}</p>
                </div>

                <div className="mt-6 text-center">
                  <button onClick={HandleOrder} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Buy Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cart