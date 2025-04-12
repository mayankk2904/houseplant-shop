import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const products = [
  { id: 1, name: 'Snake Plant', price: 29.99, category: 'Low Light' },
  // Add 5 more plants with different categories
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="products">
            {items.map(product => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button 
                  onClick={() => dispatch(addToCart(product))}
                  disabled={cart.some(item => item.id === product.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}