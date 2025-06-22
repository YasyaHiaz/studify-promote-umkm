
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Facebook, Instagram, Twitter } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    nim: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt with:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-studify-blue" />
              <span className="text-2xl font-bold">
                <span className="text-studify-dark">WEB</span>
                <span className="text-studify-blue">STUDIFY</span>
              </span>
            </div>
            <p className="text-gray-600">Platform UMKM Mahasiswa Indonesia</p>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Daftar Akun Baru</CardTitle>
              <p className="text-gray-600">
                Bergabunglah dengan ribuan mahasiswa entrepreneur Indonesia
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nama Lengkap</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Masukkan Nama Lengkap"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Mahasiswa</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@universitas.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="university">Universitas</Label>
                  <Input
                    id="university"
                    name="university"
                    placeholder="nama@universitas.com"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="nim">NIM</Label>
                  <Input
                    id="nim"
                    name="nim"
                    placeholder="xx xxx xxxxx Mahasiswa"
                    value={formData.nim}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">No. Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="08xxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Minimal 8 Karakter"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-studify-dark hover:bg-gray-800"
                >
                  Daftar Akun
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Sudah punya akun?{' '}
                  <Link to="/login" className="text-studify-blue hover:underline">
                    Masuk di Sini
                  </Link>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-gray-600">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-gray-600">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="University building with cherry blossoms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default Register;
