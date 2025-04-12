import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing" style={{ 
      backgroundImage: "url('/background.jpg')",
      minHeight: '100vh',
      backgroundSize: 'cover'
    }}>
      <h1>Green Thumb Haven</h1>
      <p>Your premier destination for indoor greenery since 2023</p>
      <Link to="/shop">
        <button>Get Started</button>
      </Link>
    </div>
  );
}