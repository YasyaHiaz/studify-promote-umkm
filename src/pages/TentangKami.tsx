
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Lightbulb, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const TentangKami = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-studify-blue" />,
      title: "Komunitas Mahasiswa",
      description: "Menghubungkan mahasiswa entrepreneur dari seluruh Indonesia dalam satu platform terintegrasi."
    },
    {
      icon: <Target className="w-8 h-8 text-studify-orange" />,
      title: "Fokus pada UMKM",
      description: "Khusus dirancang untuk mendukung perkembangan usaha mikro, kecil, dan menengah mahasiswa."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Mudah Digunakan",
      description: "Interface yang user-friendly dan mudah dipahami untuk semua kalangan mahasiswa."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Inovasi Digital",
      description: "Memanfaatkan teknologi terdepan untuk memberikan pengalaman terbaik bagi pengguna."
    }
  ];

  const stats = [
    { number: "3,700+", label: "UMKM Terdaftar", color: "text-studify-blue" },
    { number: "5,000+", label: "Mahasiswa Aktif", color: "text-studify-orange" },
    { number: "7,400+", label: "Produk Terjual", color: "text-green-600" },
    { number: "150+", label: "Universitas", color: "text-purple-600" }
  ];

  const team = [
    {
      name: "Ahmad Rizki",
      role: "CEO & Founder",
      university: "Universitas Indonesia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sari Dewi",
      role: "CTO",
      university: "Institut Teknologi Bandung",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Budi Santoso",
      role: "Head of Marketing",
      university: "Universitas Gadjah Mada",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Maria Santos",
      role: "Head of Operations",
      university: "Institut Teknologi Sepuluh Nopember",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="studify-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 px-4 py-2 border-0">
            Tentang STUDIFY
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Membangun Ekosistem <span className="text-studify-orange">UMKM Mahasiswa</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            STUDIFY adalah platform digital yang didedikasikan untuk mendukung dan mengembangkan 
            usaha mikro, kecil, dan menengah (UMKM) mahasiswa di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visi & Misi Kami</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-studify-blue rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-studify-blue">Visi</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi platform terdepan yang menghubungkan dan memberdayakan mahasiswa entrepreneur 
                    Indonesia untuk mengembangkan UMKM berkelanjutan dan berdampak positif bagi ekonomi nasional.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-studify-orange rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-studify-orange">Misi</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Menyediakan platform digital yang mudah diakses untuk promosi produk UMKM mahasiswa</li>
                    <li>• Memfasilitasi networking dan kolaborasi antar mahasiswa entrepreneur</li>
                    <li>• Memberikan edukasi dan mentoring dalam pengembangan bisnis</li>
                    <li>• Mendukung digitalisasi UMKM mahasiswa untuk jangkauan pasar yang lebih luas</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studify-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih STUDIFY?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Platform yang dirancang khusus dengan fitur-fitur unggulan untuk mendukung kesuksesan UMKM mahasiswa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
            <p className="text-lg text-gray-600">Angka yang menunjukkan komitmen kami dalam mendukung UMKM mahasiswa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600">Kenali tim di balik kesuksesan STUDIFY</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-studify-blue font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.university}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-gray-600">Prinsip yang menjadi fondasi dalam setiap langkah STUDIFY</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-studify-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inklusif</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan kesempatan yang sama bagi seluruh mahasiswa Indonesia untuk mengembangkan usahanya
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-studify-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inovatif</h3>
              <p className="text-gray-600 leading-relaxed">
                Terus berinovasi dalam menghadirkan solusi terbaik untuk kebutuhan UMKM mahasiswa
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kolaboratif</h3>
              <p className="text-gray-600 leading-relaxed">
                Membangun komunitas yang saling mendukung dan berbagi pengetahuan untuk kemajuan bersama
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 studify-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bergabunglah dengan Komunitas STUDIFY
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Mulai perjalanan entrepreneur Anda bersama ribuan mahasiswa lainnya di seluruh Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-studify-blue hover:bg-gray-100 px-8 py-4 font-semibold">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/galeri">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-studify-blue px-8 py-4 font-semibold bg-transparent">
                Lihat Produk UMKM
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TentangKami;
