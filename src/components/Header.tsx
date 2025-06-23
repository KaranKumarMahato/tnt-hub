
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, Menu, Crown, Star } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/artists', label: 'Find Talent' },
    { path: '/onboard', label: 'Join as Artist' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 shadow-lg">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="h-12 w-12 rounded-xl bg-premium-gradient flex items-center justify-center shadow-lg">
              <Crown className="text-white h-6 w-6" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Star className="h-4 w-4 text-gold-400 fill-gold-400 animate-pulse" />
            </div>
          </div>
          <div>
            <span className="font-playfair font-bold text-2xl text-premium bg-gradient-to-r from-talenthub-600 to-talenthub-800 bg-clip-text text-transparent">
              TalentHub
            </span>
            <div className="text-xs text-gray-500 font-medium tracking-wide">PREMIUM BOOKING</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.path}
                    className={`px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-talenthub-50 hover:to-talenthub-100 ${
                      isActive(item.path) 
                        ? 'text-talenthub-600 bg-gradient-to-r from-talenthub-50 to-talenthub-100 shadow-sm' 
                        : 'text-gray-700 hover:text-talenthub-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-talenthub-600 hover:bg-talenthub-50">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 hover:border-talenthub-300 hover:bg-talenthub-50 hover:text-talenthub-600 font-medium">
            Log In
          </Button>
          <Button size="sm" className="btn-premium text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white">
            <div className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-lg font-semibold transition-all duration-300 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-talenthub-600 bg-gradient-to-r from-talenthub-50 to-talenthub-100' 
                      : 'text-gray-700 hover:text-talenthub-600 hover:bg-talenthub-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t pt-6 space-y-4">
                <Button variant="outline" className="w-full border-gray-300 hover:border-talenthub-300 hover:bg-talenthub-50 hover:text-talenthub-600 font-medium">
                  Log In
                </Button>
                <Button className="w-full btn-premium text-white font-semibold shadow-lg">
                  Sign Up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
