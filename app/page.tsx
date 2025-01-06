'use client';

import Link from 'next/link';

const sketches = [
  { name: 'Random Tree Walker', path: '/walker' },
  { name: 'Gaussian Distribution', path: '/gaussian' },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold text-gray-100 mb-8">Nature of Code</h1>
      <ul className="space-y-4">
        {sketches.map((sketch) => (
          <li key={sketch.name}>
            <Link
              href={sketch.path}
              className="block w-64 text-center py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all"
            >
              {sketch.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
