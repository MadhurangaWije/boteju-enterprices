export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'Manual' | 'Automatic' | 'CVT';
  fuelType: 'Gasoline' | 'Hybrid' | 'Diesel' | 'Electric';
  bodyType: string;
  color: string;
  images: string[];
  auctionSheet?: string;
  description: string;
  location: string;
  condition: string;
  engineSize: string;
  features: string[];
}

export interface ImportStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  isCompanyHandled: boolean;
  cost?: string;
}