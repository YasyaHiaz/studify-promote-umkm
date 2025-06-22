
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Mail, Package, Star, Eye, CheckCircle, Plus, Edit, Trash2 } from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';
import AddProductForm from '@/components/AddProductForm';

const Dashboard = () => {
  const [activeTab,setActiveTab] = useState('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Kopi Arabica Premium',
      category: 'Makanan & Minuman',
      price: 'Rp 25,000',
      views: 125,
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      seller: 'YasyaHiaz',
      university: 'Universitas Indonesia',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Sari Roti & Laywer',
      category: 'Makanan & Minuman',
      price: 'Rp 25,000',
      views: 125,
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      seller: 'YasyaHiaz',
      university: 'Universitas Indonesia',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Milk Matcha Tea',
      category: 'Makanan & Minuman',
      price: 'Rp 25,000',
      views: 125,
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      seller: 'YasyaHiaz',
      university: 'Universitas Indonesia',
      rating: 4.7
    }
  ]);

  const stats = [
    {
      title: 'Total Produk',
      value: products.length.toString(),
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Open Rate',
      value: '83%',
      icon: Star,
      color: 'bg-purple-500'
    },
    {
      title: 'Complete',
      value: '70%',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Total Views',
      value: products.reduce((sum, product) => sum + product.views, 0).toString(),
      icon: Eye,
      color: 'bg-indigo-500'
    }
  ];

  const handleAddProduct = (productData: any) => {
    setProducts(prev => [...prev, productData]);
    console.log('Produk baru ditambahkan:', productData);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
    console.log('Produk dihapus:', productId);
  };

  const renderDashboardContent = () => {
    if (activeTab === 'produk') {
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Kelola Produk</h2>
              <p className="text-gray-600">Kelola semua produk UMKM Anda</p>
            </div>
            <Button 
              onClick={() => setShowAddProduct(true)}
              className="bg-studify-blue hover:bg-blue-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah Produk
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-studify-blue font-bold mb-2">{product.price}</p>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={product.status === 'Aktif' ? 'default' : 'secondary'}>
                      {product.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Eye className="h-4 w-4" />
                      {product.views} views
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Hapus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    return (
      <>
        {/* Welcome Section */}
        <Card className="mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Hi, YasyaHiaz</h2>
                <p className="text-blue-100">Ready to start your day with some pitch decks?</p>
              </div>
              <div className="w-32 h-32">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Character illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Produk Saya</CardTitle>
                <CardDescription>Kelola semua produk UMKM yang telah Anda upload</CardDescription>
              </div>
              <Button 
                onClick={() => setShowAddProduct(true)}
                className="bg-studify-blue hover:bg-blue-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah Produk
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.category}</p>
                      <p className="text-sm font-medium text-studify-blue">{product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">{product.status}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Eye className="h-4 w-4" />
                      {product.views} views
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {activeTab === 'produk' ? 'Produk' : 'Dashboard'}
              </h1>
              <p className="text-gray-600">Monday, 23 Juni 2025</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>YH</AvatarFallback>
                </Avatar>
                <span className="font-medium">YasyaHiaz</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {renderDashboardContent()}
        </main>
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <AddProductForm
          onClose={() => setShowAddProduct(false)}
          onSubmit={handleAddProduct}
        />
      )}
    </div>
  );
};

export default Dashboard;
