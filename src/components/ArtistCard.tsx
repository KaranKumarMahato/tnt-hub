
import { Artist } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
  onBook?: (artist: Artist) => void;
}

const ArtistCard = ({ artist, onBook }: ArtistCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {artist.availability && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            Available
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">{artist.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{artist.bio}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{artist.location.city}, {artist.location.state}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{artist.rating}</span>
            <span className="text-muted-foreground">({artist.reviewCount})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {artist.specialties.slice(0, 2).map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
          {artist.specialties.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{artist.specialties.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm">
            <span className="font-semibold text-artistly-600">
              ${artist.feeRange.min.toLocaleString()} - ${artist.feeRange.max.toLocaleString()}
            </span>
          </div>
          <Button 
            size="sm" 
            className="bg-artistly-600 hover:bg-artistly-700"
            onClick={() => onBook?.(artist)}
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
