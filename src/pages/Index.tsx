
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, ShoppingBag, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Kopi Arabica Premium',
      seller: 'Ahmad Firdaus',
      university: 'Universitas Indonesia',
      price: 'Rp 25.000',
      rating: 4.5,
      image: '/lovable-uploads/da6ed750-643f-4e0b-b791-3d98be01f616.png'
    },
    {
      id: 2,
      name: 'Sari Roti & Laywer',
      seller: 'Sari Indah',
      university: 'Institut Teknologi Bandung',
      price: 'Rp 25.000',
      rating: 4.3,
      image: '/lovable-uploads/5aff5e65-64f6-4cb8-8df4-44f9ee4fd5a1.png'
    },
    {
      id: 3,
      name: 'Matcha Creamy Milk',
      seller: 'Aurora',
      university: 'Universitas Diponegoro',
      price: 'Rp 25.000',
      rating: 4.7,
      image: '/lovable-uploads/c28efebf-8914-47ee-aa0b-f7cf5fcc9600.png'
    },
    {
      id: 4,
      name: 'Soft Cake Premium',
      seller: 'Arina Berlian',
      university: 'Universitas Indonesia',
      price: 'Rp 25.000',
      rating: 4.4,
      image: '/lovable-uploads/3d1ef7f9-ee16-4950-9845-0bffdcd272a9.png'
    }
  ];

  const stats = [
    { number: '3,700+', label: 'UMKM Telah bergabung' },
    { number: '5,000+', label: 'Mahasiswa Terdaftar' },
    { number: '7,400+', label: 'Produk Terjual' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative studify-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                Platform UMKM Mahasiswa Indonesia
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Temukan berbagai produk berkualitas dari mahasiswa entrepreneur Indonesia
              </h1>
              <p className="text-xl mb-8 text-white/90">
                We're here to help you take control of your money and turn your dreams into reality
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/galeri">
                  <Button size="lg" className="bg-white text-studify-blue hover:bg-gray-100">
                    Lihat Galeri
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-studify-blue">
                    Bergabung Sekarang
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Students working together" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-studify-blue mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan produk-produk terbaik dari mahasiswa entrepreneur Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">Fashion</Badge>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-2">
                    {product.seller} - {product.university}
                  </CardDescription>
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-studify-blue">{product.price}</span>
                    <Button size="sm" className="bg-studify-blue hover:bg-blue-600">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/galeri">
              <Button variant="outline" size="lg">
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 studify-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Upload UMKM kamu untuk Pertama Jangkauan Inovasi
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Bergabunglah dengan ribuan mahasiswa entrepreneur lainnya dan mulai promosikan produk UMKM Anda hari ini!
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-studify-blue hover:bg-gray-100">
              Mulai Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
