import './Home.css';
import { useState, useEffect } from "react"
import Products from '../../components/Products/Products';
import NavBar from '../../components/navbar/NavBar';
import CartModal from '../../components/CartModal/CartModal';

function Home() {

  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const rs = await fetch('https://fakestoreapi.com/products');
        if (!rs.ok) {
          throw new Error("Failed to fetch the products");
        }
        const data = await rs.json();
        setProducts(data);
        setLoading(false)
      } catch (error) {
        setErr(error.message)
        setLoading(false)
      }
    }
    fetchProducts();
  }, [])

  const addToCart = (product) => {
    if (cart.some(cur => cur.id === product.id)) {
      alert('Item already added to cart');
    } else {
      setCart([...cart, product]);
    }
  }

  const removeFromCart = (product) => {
    setCart(cart.filter(cur => cur.id !== product.id));
  };

  return (
    <>
      <div className="app-container">
        <NavBar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />
        <Products products={products} addToCart={addToCart} err={err} loading={loading} />
        <CartModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </div>
    </>
  )
}

export default Home;