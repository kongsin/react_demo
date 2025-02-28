import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-60 min-w-60 min-h-screen p-5 hidden lg:block">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="mt-5">
        <ul>
          <li className="mb-3">
            <Link href="/" className="block p-2 rounded hover:bg-gray-700">
              Overview
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/transactions" className="block p-2 rounded hover:bg-gray-700">
              Transactions
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;