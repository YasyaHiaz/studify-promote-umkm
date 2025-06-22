
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Search, Grid, List } from 'lucide-react';
import Layout from '@/components/Layout';

const Galeri = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: 'Matcha Creamy Milk',
      seller: 'Aurora',
      university: 'Universitas Diponegoro',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.5,
      reviews: 126,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Soft Cake Premium',
      seller: 'Arina Berlian',
      university: 'Universitas Indonesia',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.3,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Kopi Arabica Premium',
      seller: 'Ahmad Firdaus',
      university: 'Universitas Indonesia',
      category: 'Makanan & Minuman',
      price: 'Rp 25.000',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Sari Roti & Laywer',
      seller: 'Chairani',
      university: 'Institut Teknologi Sepuluh November',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Tas Rajut Handmade',
      seller: 'Sari',
      university: 'Institut Teknologi Bandung',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Piring Motif Ukir',
      seller: 'Galuh Mas',
      university: 'Universitas Padjadjaran',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.2,
      reviews: 74,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 7,
      name: 'Mini Figuro Colosse',
      seller: 'Aura Nabira',
      university: 'Universitas Brawijaya',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.8,
      reviews: 187,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 8,
      name: 'Keychain Kulit Imut',
      seller: 'Chinta',
      university: 'Universitas Pendidikan Indonesia',
      category: 'Fashion',
      price: 'Rp 25.000',
      rating: 4.5,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeri Produk UMKM</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai produk berkualitas dari mahasiswa entrepreneur Indonesia
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Cari produk atau nama penjual..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Semua Kategori</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Makanan & Minuman">Makanan & Minuman</SelectItem>
                <SelectItem value="Kerajinan">Kerajinan</SelectItem>
                <SelectItem value="Teknologi">Teknologi</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <p className="text-gray-600">Menampilkan 12 dari {filteredProducts.length} produk</p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className={`hover:shadow-lg transition-shadow ${viewMode === 'list' ? 'flex flex-row' : ''}`}>
                <CardHeader className={`p-0 ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'h-full' : 'aspect-square'} bg-gray-100 rounded-t-lg overflow-hidden ${viewMode === 'list' ? 'rounded-l-lg rounded-t-none' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-2">
                    {product.seller} - {product.university}
                  </CardDescription>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} ulasan)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-studify-blue">{product.price}</span>
                    <Link to={`/produk/${product.id}`}>
                      <Button size="sm" className="bg-studify-blue hover:bg-blue-600">
                        Lihat Detail
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Lihat Lebih Banyak
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Galeri;
