
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-artistly-500 to-artistly-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl text-artistly-700">Artistly</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting event planners with talented performing artists worldwide.
            </p>
          </div>

          {/* For Event Planners */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Event Planners</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/artists" className="hover:text-artistly-600">Browse Artists</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">How It Works</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Pricing</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Support</Link></li>
            </ul>
          </div>

          {/* For Artists */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Artists</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/onboard" className="hover:text-artistly-600">Join Artistly</Link></li>
              <li><Link to="/dashboard" className="hover:text-artistly-600">Artist Dashboard</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Success Stories</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Resources</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-artistly-600">About Us</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Contact</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-artistly-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Artistly. All rights reserved. This is a demo project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
