
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-studify-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-studify-blue" />
              <span className="text-2xl font-bold">
                <span className="text-white">WEB</span>
                <span className="text-studify-blue">STUDIFY</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Platform promosi UMKM mahasiswa terbesar di Indonesia. Menghubungkan produk kreatif mahasiswa dengan masyarakat luas.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><Link to="/galeri" className="text-gray-400 hover:text-white transition-colors">Daftar UMKM</Link></li>
              <li><Link to="/kategori" className="text-gray-400 hover:text-white transition-colors">Jelajahi Produk</Link></li>
              <li><Link to="/kategori" className="text-gray-400 hover:text-white transition-colors">Kategori</Link></li>
              <li><Link to="/universitas" className="text-gray-400 hover:text-white transition-colors">Universitas</Link></li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/syarat" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link to="/privasi" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/kontak" className="text-gray-400 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-gray-400">Dapatkan info terbaru tentang produk UMKM dan promo menarik!</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input 
                placeholder="Masukkan email Anda" 
                className="rounded-r-none bg-gray-800 border-gray-600 text-white"
              />
              <Button className="rounded-l-none bg-studify-blue hover:bg-blue-600">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 UMKM-Hub. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
