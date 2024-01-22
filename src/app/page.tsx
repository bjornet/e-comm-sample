import Link from 'next/link';

/**
 * @note I do not fetch Server Side. This is due to simplcity in this exercise.
 */
const Home = () => (
  <div>
    <h1>Home</h1>

    <Link href="/products">Products</Link>
  </div>
);

export default Home;
