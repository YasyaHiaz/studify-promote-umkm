
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Mail, Package, Star, Eye, CheckCircle, Plus, Edit, Trash2 } from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    {
      title: 'Total Produk',
      value: '157',
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
      value: '157',
      icon: Eye,
      color: 'bg-indigo-500'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Kopi Arabica Premium',
      category: 'Makanan & Minuman',
      price: 'Rp 25,000',
      views: 125,
      status: 'Aktif',
      image: '/lovable-uploads/da6ed750-643f-4e0b-b791-3d98be01f616.png'
    },
    {
      id: 2,
      name: 'Sari Roti & Laywer',
      category: 'Makanan & Minuman',
      price: 'Rp 25,000',
      views: 125,
      status: 'Aktif',
      image: '/lovable-uploads/5aff5e65-64f6-4cb8-8df4-44f9ee4fd5a1.png'
    },
    {
      id: 3,
      name: 'Milk Matcha Tea',
      category: 'Makanan & Minuman',
      price: 'Rp 25,000',
      views: 125,
      status: 'Aktif',
      image: '/lovable-uploads/c28efebf-8914-47ee-aa0b-f7cf5fcc9600.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
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
                <Button className="bg-studify-blue hover:bg-blue-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Produk
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
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
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
