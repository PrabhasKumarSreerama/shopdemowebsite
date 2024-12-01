import './CartModal.css';

const CartModal = ({ isOpen, closeModal, cart, removeFromCart }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Cart</h2>
                <button className="close-button" onClick={closeModal}>Close</button>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className="cart-items">
                        {cart.map(cur => (
                            <li key={cur.id} className="cart-item">
                                <img src={cur.image} alt={cur.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{cur.title}</h3>
                                    <p>${cur.price}</p>
                                    <button onClick={() => removeFromCart(cur)} className="remove-button">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartModal;