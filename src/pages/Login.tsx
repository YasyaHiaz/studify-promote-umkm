
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Facebook, Instagram, Twitter } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
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
              <CardTitle className="text-2xl">Masuk ke Akun Anda</CardTitle>
              <p className="text-gray-600">
                Masukkan email dan password untuk mengakses dashboard
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Mahasiswa</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@universitas.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-studify-dark hover:bg-gray-800"
                >
                  Masuk
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Belum punya akun?{' '}
                  <Link to="/register" className="text-studify-blue hover:underline">
                    Daftar sekarang
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

export default Login;
