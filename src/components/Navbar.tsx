
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-studify-blue" />
              <span className="text-2xl font-bold">
                <span className="text-studify-dark">WEB</span>
                <span className="text-studify-blue">STUDIFY</span>
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-studify-blue ${
                isActive('/') ? 'text-studify-blue' : 'text-gray-700'
              }`}
            >
              Beranda
            </Link>
            <Link 
              to="/galeri" 
              className={`text-sm font-medium transition-colors hover:text-studify-blue ${
                isActive('/galeri') ? 'text-studify-blue' : 'text-gray-700'
              }`}
            >
              Galeri UMKM
            </Link>
            <Link 
              to="/tentang" 
              className={`text-sm font-medium transition-colors hover:text-studify-blue ${
                isActive('/tentang') ? 'text-studify-blue' : 'text-gray-700'
              }`}
            >
              Tentang Kami
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative max-w-md">
            <Input
              type="text"
              placeholder="Cari produk UMKM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 h-4 w-4 text-gray-400" />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-studify-blue hover:bg-blue-600">
                Yuk Mulai!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
