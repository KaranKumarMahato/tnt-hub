
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ArtistCard from '@/components/ArtistCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories, artists } from '@/data/mockData';
import { Search, Users, Calendar, Shield } from 'lucide-react';

const Index = () => {
  const featuredArtists = artists.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the Perfect Artist
            <br />
            <span className="text-artistly-200">for Your Event</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-artistly-100 max-w-3xl mx-auto">
            Connect with talented performers, musicians, speakers, and entertainers 
            to make your event unforgettable.
          </p>
          
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for artists, bands, speakers..."
                className="pl-10 h-12 text-gray-900"
              />
            </div>
            <Button size="lg" className="bg-white text-artistly-700 hover:bg-gray-100 h-12 px-8">
              Find Artists
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>1,000+ Verified Artists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Available Nationwide</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Secure Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover talented artists across various entertainment categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Artists</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover some of our top-rated performers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/artists">
              <Button size="lg" className="bg-artistly-600 hover:bg-artistly-700">
                View All Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-artistly-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Next Event?
          </h2>
          <p className="text-xl mb-8 text-artistly-100 max-w-2xl mx-auto">
            Join thousands of event planners who trust Artistly to find the perfect entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/artists">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-artistly-700">
                Browse Artists
              </Button>
            </Link>
            <Link to="/onboard">
              <Button size="lg" className="bg-white text-artistly-700 hover:bg-gray-100">
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
