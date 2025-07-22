import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Fuel, Gauge, Settings, ArrowRight, Star } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden card-hover group border-brand-neutral-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-500"
        />
        <Badge variant="premium" className="absolute top-4 right-4 shadow-lg">
          {vehicle.year}
        </Badge>
        <Badge variant="success" className="absolute top-4 left-4 gap-1">
          <Star className="w-3 h-3" />
          Quality Assured
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary-700 transition-colors">
            {vehicle.make} {vehicle.model}
          </h3>
          <span className="text-2xl font-bold bg-gradient-to-r from-brand-accent-400 to-brand-accent-500 bg-clip-text text-transparent">
            ${vehicle.price.toLocaleString()}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 pb-4">
        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-primary-600" />
            <span>{vehicle.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-brand-secondary-500" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-brand-accent-500" />
            <span>{vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-0">
        <Badge variant="outline" className="bg-brand-secondary-50 text-brand-secondary-700 border-brand-secondary-200">
          {vehicle.condition}
        </Badge>
        <Button variant="brand" size="sm" className="gap-2 shadow-md" asChild>
          <Link href={`/vehicles/${vehicle.id}`}>
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}