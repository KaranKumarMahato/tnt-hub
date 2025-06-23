
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtistCard from '@/components/ArtistCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { artists, categories, Artist } from '@/data/mockData';
import { Search, Filter, X } from 'lucide-react';

const Artists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(artists);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  // Get unique locations from artists
  const locations = Array.from(new Set(artists.map(artist => `${artist.location.city}, ${artist.location.state}`))).sort();

  useEffect(() => {
    let filtered = artists;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(artist => artist.category === selectedCategory);
    }

    // Apply location filter
    if (selectedLocation) {
      filtered = filtered.filter(artist => 
        `${artist.location.city}, ${artist.location.state}` === selectedLocation
      );
    }

    // Apply price range filter
    if (priceRange) {
      filtered = filtered.filter(artist => {
        const maxFee = artist.feeRange.max;
        switch (priceRange) {
          case 'under-1000':
            return maxFee < 1000;
          case '1000-3000':
            return maxFee >= 1000 && maxFee <= 3000;
          case '3000-5000':
            return maxFee >= 3000 && maxFee <= 5000;
          case 'over-5000':
            return maxFee > 5000;
          default:
            return true;
        }
      });
    }

    setFilteredArtists(filtered);
  }, [searchTerm, selectedCategory, selectedLocation, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
    setPriceRange('');
    setSearchParams({});
  };

  const activeFiltersCount = [selectedCategory, selectedLocation, priceRange, searchTerm].filter(Boolean).length;

  const handleBookArtist = (artist: Artist) => {
    // In a real app, this would open a booking modal or navigate to booking page
    console.log('Booking artist:', artist.name);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Artists</h1>
            <p className="text-xl text-muted-foreground">
              Discover talented performers for your next event
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border p-6 mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary">{activeFiltersCount}</Badge>
                )}
              </h2>
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search artists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1000">Under $1,000</SelectItem>
                  <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                  <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                  <SelectItem value="over-5000">Over $5,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredArtists.length} of {artists.length} artists
            </p>
          </div>

          {/* Artists Grid */}
          {filteredArtists.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtists.map((artist) => (
                <ArtistCard 
                  key={artist.id} 
                  artist={artist} 
                  onBook={handleBookArtist}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-2">No artists found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Artists;
