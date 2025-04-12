import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../features/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Your Cart ({cart.length} items)</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div className="quantity-controls">
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
          </div>
          <button onClick={() => dispatch(remove(item.id))}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <Link to="/shop">Continue Shopping</Link>
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
    </div>
  );
}