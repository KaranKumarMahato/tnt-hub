
import { Category } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/artists?category=${category.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer gradient-card border-artistly-100">
        <CardContent className="p-6 text-center space-y-4">
          <div className="text-4xl group-hover:animate-float">
            {category.icon}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-artistly-700 group-hover:text-artistly-800">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
            <div className="text-sm font-medium text-artistly-600">
              {category.artistCount} artists available
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
