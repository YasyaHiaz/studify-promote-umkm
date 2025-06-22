
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageCircle, Share2, Heart, ChevronLeft } from 'lucide-react';
import Layout from '@/components/Layout';

const DetailProduk = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would be fetched based on ID
  const product = {
    id: 1,
    name: 'Kopi Arabica Premium',
    seller: {
      name: 'Ahmad Firdaus',
      university: 'Universitas Indonesia',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    category: 'Makanan & Minuman',
    tags: ['Premium', 'Arabica', 'Natural Process'],
    price: 'Rp 25.000',
    rating: 4.5,
    reviews: 126,
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: `Kopi Arabica Premium ini dipetik langsung dari dataran tinggi Jawa Barat pada ketinggian 1200-1500 mdpl. Proses pengolahan menggunakan metode natural yang menghasilkan cita rasa yang unik dan kompleks.

Karakteristik Kopi:
• Aroma: Floral dengan hint chocolate
• Taste: Fruity dengan aftersize yang clean
• Body: Medium
• Acidity: Bright
• Kemasan: 250gram per pack
• Roast level: Light roast
• Grind level: Medium ground (sesuai permintaan)
• Roast level: Medium roast
• Expired: 6 bulan dari tanggal roasting

Cocok untuk brewing method: V60, Chemex, French Press, Espresso.
Kami menggunakan packaging yang food grade dan kedap udara untuk menjaga kualitas kopi tetap fresh hingga 2 bulan setelah kemasan dibuka dan panduan brewing.`
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Cardigan Batik Stylish',
      seller: 'Puji Sekar',
      university: 'Universitas Diponegoro',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Batik Handmade Premium',
      seller: 'Roni Fabri',
      university: 'Institut Pertanian Bogor',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Sepatu Nike Cotton Candy',
      seller: 'Clara Nur Fitria',
      university: 'Universitas Indonesia',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Tas Kulit Premium',
      seller: 'Renita Permata',
      university: 'Universitas Sebelas Maret',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link to="/galeri" className="flex items-center text-gray-600 hover:text-studify-blue">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Kembali ke Galeri
            </Link>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-studify-blue' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex gap-2 mb-4">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{product.rating} (26 ulasan) • 150 Terjual</span>
              </div>

              <div className="text-3xl font-bold text-studify-blue mb-6">{product.price}</div>

              {/* Seller Info */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={product.seller.avatar} />
                        <AvatarFallback>{product.seller.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Informasi Penjual</div>
                        <div className="text-sm text-gray-600">{product.seller.name}</div>
                        <div className="text-sm text-gray-500">{product.seller.university}</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Pesan via WhatsApp
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Simpan
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Bagikan
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Deskripsi Produk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {product.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Produk Serupa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={product.image} 
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduk;
