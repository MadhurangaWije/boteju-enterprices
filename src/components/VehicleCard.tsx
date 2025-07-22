import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-neutral-200 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-700 to-primary-teal text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
          {vehicle.year}
        </div>
        <div className="absolute top-4 left-4">
          <span className="trust-badge text-xs">✨ Quality Assured</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-700 transition-colors">
            {vehicle.make} {vehicle.model}
          </h3>
          <span className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
            ${vehicle.price.toLocaleString()}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-neutral-600">
          <div className="flex items-center space-x-1">
            <span>📍</span>
            <span>{vehicle.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>⛽</span>
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🏃‍♂️</span>
            <span>{vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>⚙️</span>
            <span>{vehicle.transmission}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="inline-block bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800 text-sm px-3 py-2 rounded-full font-semibold border border-secondary-300">
            {vehicle.condition}
          </span>
          <Link 
            href={`/vehicles/${vehicle.id}`}
            className="bg-gradient-to-r from-highlight-skyBlue to-primary-600 text-white px-6 py-3 rounded-xl hover:from-highlight-skyBlue/90 hover:to-primary-700 transition-all duration-300 text-sm font-bold shadow-lg transform hover:scale-105"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}