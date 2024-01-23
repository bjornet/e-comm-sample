import Link from 'next/link';

/**
 * @note I do not fetch Server Side. This is due to simplcity in this exercise.
 */
const Home = () => (
  <div>
    <h1>Welcome to a E-commerce sample site</h1>
    <br />
    <strong>Please check out our products:</strong>{' '}
    <Link href="/products" className="p-2 bg-sky-700 hover:bg-sky-500">
      Products
    </Link>
  </div>
);

export default Home;
