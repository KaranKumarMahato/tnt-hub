
export interface Artist {
  id: string;
  name: string;
  bio: string;
  category: string;
  languages: string[];
  feeRange: {
    min: number;
    max: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  image: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  availability: boolean;
  experience: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  artistCount: number;
}

export interface BookingLead {
  id: string;
  artistId: string;
  artistName: string;
  eventDate: string;
  eventType: string;
  location: string;
  budget: number;
  status: 'pending' | 'confirmed' | 'declined';
  clientName: string;
  clientEmail: string;
  message: string;
  createdAt: string;
}

export const categories: Category[] = [
  {
    id: 'musicians',
    name: 'Musicians',
    icon: '🎵',
    description: 'Live bands, solo artists, and musical performers',
    artistCount: 234
  },
  {
    id: 'comedians',
    name: 'Comedians',
    icon: '😄',
    description: 'Stand-up comedians and comedy acts',
    artistCount: 89
  },
  {
    id: 'dancers',
    name: 'Dancers',
    icon: '💃',
    description: 'Professional dancers and dance troupes',
    artistCount: 156
  },
  {
    id: 'speakers',
    name: 'Speakers',
    icon: '🎤',
    description: 'Motivational and keynote speakers',
    artistCount: 78
  },
  {
    id: 'magicians',
    name: 'Magicians',
    icon: '🎩',
    description: 'Magic shows and illusion performances',
    artistCount: 45
  },
  {
    id: 'djs',
    name: 'DJs',
    icon: '🎧',
    description: 'DJs for parties and events',
    artistCount: 187
  }
];

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    bio: 'Award-winning jazz vocalist with over 15 years of experience performing at corporate events, weddings, and festivals.',
    category: 'musicians',
    languages: ['English', 'French'],
    feeRange: { min: 2000, max: 5000 },
    location: { city: 'New York', state: 'NY', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1494790108755-2616c24085ce?w=400',
    rating: 4.9,
    reviewCount: 127,
    specialties: ['Jazz', 'Soul', 'Corporate Events'],
    availability: true,
    experience: '15+ years'
  },
  {
    id: '2',
    name: 'Comedy Central Mike',
    bio: 'Professional stand-up comedian featured on Comedy Central. Specializes in corporate entertainment and clean comedy.',
    category: 'comedians',
    languages: ['English'],
    feeRange: { min: 1500, max: 4000 },
    location: { city: 'Los Angeles', state: 'CA', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 4.8,
    reviewCount: 89,
    specialties: ['Corporate Comedy', 'Clean Humor', 'Improvisation'],
    availability: true,
    experience: '12+ years'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    bio: 'Professional ballroom and Latin dance instructor. Perfect for teaching and performing at weddings and cultural events.',
    category: 'dancers',
    languages: ['English', 'Spanish'],
    feeRange: { min: 800, max: 2500 },
    location: { city: 'Miami', state: 'FL', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 4.7,
    reviewCount: 156,
    specialties: ['Ballroom', 'Latin Dance', 'Wedding Choreography'],
    availability: true,
    experience: '10+ years'
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    bio: 'Motivational speaker and business consultant. TEDx speaker with expertise in leadership and personal development.',
    category: 'speakers',
    languages: ['English'],
    feeRange: { min: 3000, max: 8000 },
    location: { city: 'Chicago', state: 'IL', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.9,
    reviewCount: 203,
    specialties: ['Leadership', 'Team Building', 'Corporate Training'],
    availability: true,
    experience: '20+ years'
  },
  {
    id: '5',
    name: 'The Amazing Marco',
    bio: 'Professional magician and illusion artist. Perfect for children parties, corporate events, and private gatherings.',
    category: 'magicians',
    languages: ['English', 'Italian'],
    feeRange: { min: 1000, max: 3000 },
    location: { city: 'Las Vegas', state: 'NV', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    rating: 4.6,
    reviewCount: 78,
    specialties: ['Close-up Magic', 'Stage Illusions', 'Kids Entertainment'],
    availability: true,
    experience: '8+ years'
  },
  {
    id: '6',
    name: 'DJ Pulse',
    bio: 'Electronic music producer and DJ specializing in weddings, corporate events, and nightclub performances.',
    category: 'djs',
    languages: ['English'],
    feeRange: { min: 1200, max: 4000 },
    location: { city: 'Austin', state: 'TX', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    rating: 4.8,
    reviewCount: 234,
    specialties: ['Wedding DJ', 'Corporate Events', 'Electronic Music'],
    availability: true,
    experience: '7+ years'
  }
];

export const bookingLeads: BookingLead[] = [
  {
    id: '1',
    artistId: '1',
    artistName: 'Sarah Johnson',
    eventDate: '2024-07-15',
    eventType: 'Corporate Event',
    location: 'Manhattan, NY',
    budget: 3000,
    status: 'pending',
    clientName: 'John Smith',
    clientEmail: 'john.smith@company.com',
    message: 'Looking for a jazz vocalist for our annual company dinner.',
    createdAt: '2024-06-20'
  },
  {
    id: '2',
    artistId: '2',
    artistName: 'Comedy Central Mike',
    eventDate: '2024-08-02',
    eventType: 'Private Party',
    location: 'Beverly Hills, CA',
    budget: 2500,
    status: 'confirmed',
    clientName: 'Lisa Davis',
    clientEmail: 'lisa.davis@email.com',
    message: 'Birthday party entertainment for adults.',
    createdAt: '2024-06-18'
  }
];
