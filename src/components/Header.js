import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector(state => 
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}