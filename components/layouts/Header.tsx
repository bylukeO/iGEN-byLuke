import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            {/* Replace this span with an <img> or <Image /> when you have a logo */}
            <Image
              className="w-10 h-10 rounded-full" src="/favicon.jpg" alt="Logo"
              width={40}
              height={40}
            />

          </div>
          <h1 className="text-2xl font-bold text-white">iGEN</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;