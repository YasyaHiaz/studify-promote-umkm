
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Package, Images, HelpCircle, Settings, LogOut, BookOpen } from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar = ({ activeTab, setActiveTab }: DashboardSidebarProps) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      action: () => setActiveTab('dashboard')
    },
    {
      id: 'produk',
      label: 'Produk',
      icon: Package,
      action: () => setActiveTab('produk')
    },
    {
      id: 'galeri',
      label: 'Galeri UMKM',
      icon: Images,
      href: '/galeri'
    }
  ];

  const supportItems = [
    {
      id: 'help',
      label: 'Help & Center',
      icon: HelpCircle,
      href: '/help'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/settings'
    }
  ];

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout clicked');
    // For now, just redirect to home
    window.location.href = '/';
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-studify-blue" />
          <span className="text-xl font-bold">STUDIFY</span>
        </Link>
      </div>

      {/* Add Product Button */}
      <div className="p-4">
        <Button 
          onClick={() => setActiveTab('produk')}
          className="w-full bg-studify-blue hover:bg-blue-600 text-white"
        >
          <span className="mr-2">+</span>
          Tambah Produk
        </Button>
      </div>

      {/* Main Menu */}
      <div className="flex-1 px-4">
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">MAIN MENU</p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-studify-blue text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-studify-blue text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Help & Support */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">HELP & SUPPORT</p>
          <nav className="space-y-1">
            {supportItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-studify-blue text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Logout
        </Button>
        <p className="text-xs text-gray-500 mt-4">© 2025 UMKM.Hiaz Cups Dibruding.</p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
