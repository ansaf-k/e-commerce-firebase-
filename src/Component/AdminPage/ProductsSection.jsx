import { useEffect, useRef, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';



const ProductsSection = () => {

  const [product, setProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const name = useRef();
  const category = useRef();
  const price = useRef();
  const image = useRef();

  const getProducts = async () => {
    const snapshot = await getDocs(collection(db, "Products"));
    const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAllProduct(productsData);
    console.log(allProduct);
  }

  const handleAddProduct = (e) => {
    e.preventDefault();

    setProduct({
      name: name.current.value,
      category: category.current.value,
      price: price.current.value,
      img: image.current.value,
    });

    const productRef = doc(collection(db, "Products"));
    setDoc(productRef, product).then(() => {
      alert('Product added successfully');
      name.current.value = '';
      category.current.value = '';
      price.current.value = '';
      image.current.value = '';
    });
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Products Management</h3>

      {/* add section */}
      <form onSubmit={handleAddProduct} className="bg-gray-800 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold mb-4">Add New Product</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Product Name</label>
            <input
              type="text"
              ref={name}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              ref={category}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-1">Price</label>
            <input
              type="number"
              name="price"
              ref={price}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
            <input
              type="url"
              name="category"
              ref={image}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Add Product
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm uppercase">
              <th className="py-3 px-4">Product Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {allProduct.map((item, index) => (
              <tr key={index} className="border-t border-gray-800">
                <td className="py-4 px-4 w-1 h-1"><img src={item.img} alt="alt" /></td>
                <td className="py-4 px-4">{item.name}</td>
                <td className="py-4 px-4">{item.category}</td>
                <td className="py-4 px-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsSection;

