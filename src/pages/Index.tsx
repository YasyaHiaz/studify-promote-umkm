
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Makanan & Minuman'
    },
    {
      id: 2,
      name: 'Sari Roti & Laywer',
      seller: 'Sari Indah',
      university: 'Institut Teknologi Bandung',
      price: 'Rp 25.000',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Makanan & Minuman'
    },
    {
      id: 3,
      name: 'Matcha Creamy Milk',
      seller: 'Aurora',
      university: 'Universitas Diponegoro',
      price: 'Rp 25.000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Makanan & Minuman'
    },
    {
      id: 4,
      name: 'Soft Cake Premium',
      seller: 'Arina Berlian',
      university: 'Universitas Indonesia',
      price: 'Rp 25.000',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Makanan & Minuman'
    },
    {
      id: 5,
      name: 'Handicraft Unik',
      seller: 'Maria Santos',
      university: 'Universitas Gadjah Mada',
      price: 'Rp 45.000',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Kerajinan Tangan'
    },
    {
      id: 6,
      name: 'T-Shirt Custom',
      seller: 'Budi Santoso',
      university: 'Institut Teknologi Sepuluh Nopember',
      price: 'Rp 75.000',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Fashion'
    }
  ];

  const universityLogos = [
    { name: 'UI', logo: '🎓' },
    { name: 'ITB', logo: '🏛️' },
    { name: 'UGM', logo: '🎯' },
    { name: 'ITS', logo: '⚙️' },
    { name: 'UNDIP', logo: '🌟' },
    { name: 'UNAIR', logo: '💙' },
    { name: 'IPB', logo: '🌱' },
    { name: 'UNPAD', logo: '🔥' }
  ];

  const stats = [
    { number: '3,700+', label: 'UMKM Telah bergabung' },
    { number: '5,000+', label: 'Mahasiswa Terdaftar' },
    { number: '7,400+', label: 'Produk Terjual' }
  ];

  const learningStories = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Workshop Entrepreneurship'
    },
    {
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Pelatihan Digital Marketing'
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Mentoring Bisnis'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative studify-gradient text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 px-4 py-2">
                Platform UMKM Mahasiswa Indonesia
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Platform UMKM{' '}
                <span className="text-studify-orange">Mahasiswa Indonesia</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                We're here to help you take control of your money and turn your dreams into reality. 
                Temukan berbagai produk berkualitas dari mahasiswa entrepreneur Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/galeri">
                  <Button size="lg" className="bg-white text-studify-blue hover:bg-gray-100 px-8 py-4">
                    Lihat Galeri
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-studify-blue px-8 py-4">
                    Bergabung Sekarang
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Product Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {featuredProducts.slice(0, 4).map((product, index) => (
                  <div 
                    key={product.id} 
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                    <p className="text-white/70 text-xs">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            UMKM Berdasarkan Universitas
          </h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {universityLogos.map((uni, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <span className="text-2xl">{uni.logo}</span>
                <span className="font-medium">{uni.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Kategori Produk */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi berbagai kategori produk UMKM dari mahasiswa di seluruh Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/produk/${product.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">{product.category}</Badge>
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
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/galeri">
              <Button variant="outline" size="lg" className="px-8">
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Terbaru */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Terbaru</h2>
            <p className="text-gray-600">Produk terbaru dari mahasiswa entrepreneur</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-studify-blue">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Testimonial Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-studify-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-4">"Platform yang sangat membantu untuk mengembangkan UMKM mahasiswa"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-studify-blue rounded-full flex items-center justify-center text-white font-semibold">A</div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm">Ahmad</p>
                    <p className="text-xs text-gray-600">Mahasiswa UI</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-4">"Mudah digunakan dan sangat user-friendly"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-studify-orange rounded-full flex items-center justify-center text-white font-semibold">S</div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm">Sari</p>
                    <p className="text-xs text-gray-600">Mahasiswa ITB</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-4">"Sangat membantu dalam promosi produk UMKM"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-studify-blue rounded-full flex items-center justify-center text-white font-semibold">M</div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm">Maria</p>
                    <p className="text-xs text-gray-600">Mahasiswa UGM</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-4">"Interface yang menarik dan fitur lengkap"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-studify-orange rounded-full flex items-center justify-center text-white font-semibold">B</div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm">Budi</p>
                    <p className="text-xs text-gray-600">Mahasiswa ITS</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pelajaran dari Pengalaman Nyata</h2>
            <p className="text-gray-600">Belajar dari pengalaman mahasiswa entrepreneur sukses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pelajari strategi dan tips sukses dari pengalaman mahasiswa entrepreneur
                  </p>
                  <Button variant="outline" size="sm">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 studify-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Upload UMKM kamu untuk Jangkauan Inovasi Pertama
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Bergabunglah dengan ribuan mahasiswa entrepreneur lainnya dan mulai promosikan produk UMKM Anda hari ini!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">Mudah</div>
                <p className="text-white/90">Upload produk dengan mudah dan cepat</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Gratis</div>
                <p className="text-white/90">Tanpa biaya pendaftaran atau komisi</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Terpercaya</div>
                <p className="text-white/90">Platform yang telah dipercaya ribuan mahasiswa</p>
              </div>
            </div>
          </div>
          <Link to="/register">
            <Button size="lg" className="bg-white text-studify-blue hover:bg-gray-100 px-8 py-4">
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
