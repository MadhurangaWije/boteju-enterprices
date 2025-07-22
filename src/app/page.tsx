import Link from 'next/link';
import VehicleCard from '@/components/VehicleCard';
import { featuredVehicles } from '@/lib/dummyData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Car, 
  Shield, 
  Truck, 
  Target, 
  Gem, 
  Users, 
  Zap, 
  Trophy, 
  DollarSign,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="success" className="mb-6 energy-pulse gap-2 text-sm">
            <Users className="w-4 h-4" />
            Trusted by 500+ Happy Customers
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-brand-primary-100 bg-clip-text text-transparent">
            Quality Japanese Vehicles
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto text-brand-primary-100 leading-relaxed">
            <span className="font-bold text-brand-accent-400">Clear Prices.</span> <span className="font-bold text-brand-secondary-400">Clean Deals.</span> <span className="font-bold text-brand-highlight-yellow">Quality Rides.</span>
            <br />
            Import premium Japanese cars directly from Japan with complete transparency and professional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="accent" size="xl" className="gap-2 shadow-xl" asChild>
              <Link href="/vehicles">
                <Car className="w-5 h-5" />
                Browse Vehicles
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 gap-2 shadow-xl" asChild>
              <Link href="/import-flow">
                <CheckCircle className="w-5 h-5" />
                Learn Process
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2 text-brand-highlight-yellow" />
                <div className="font-semibold mb-1">Fast Processing</div>
                <div className="text-brand-primary-200 text-sm">2-4 months delivery</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-brand-secondary-400" />
                <div className="font-semibold mb-1">Quality Assured</div>
                <div className="text-brand-primary-200 text-sm">Detailed inspections</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-brand-accent-400" />
                <div className="font-semibold mb-1">Best Prices</div>
                <div className="text-brand-primary-200 text-sm">No hidden costs</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-brand-neutral-100 via-brand-neutral-200 to-brand-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-primary-700 to-brand-primary-teal bg-clip-text text-transparent">
              Why Choose Boteju Enterprises?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our transparent, reliable, and customer-focused approach
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary-700 to-brand-primary-teal rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all duration-300 energy-pulse">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">Direct from Japan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Access to authentic Japanese vehicles directly from auctions and dealerships across Japan. 
                  No middlemen, no markup.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary-500 to-brand-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all duration-300 energy-pulse">
                  <Gem className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Every vehicle is thoroughly inspected with detailed auction sheets and condition reports. 
                  Your trust is our priority.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-brand-accent-400 to-brand-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all duration-300 energy-pulse">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">Full Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  End-to-end service from bidding to delivery, handling all documentation and logistics. 
                  Sit back and relax.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium vehicles ready for import from Japan's finest auctions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="brand" size="lg" className="gap-2" asChild>
              <Link href="/vehicles">
                View All Vehicles <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-brand-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Simple Import Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make importing Japanese vehicles straightforward and transparent
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0 bg-white">
              <CardHeader>
                <Badge variant="premium" className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </Badge>
                <CardTitle className="text-xl mb-2">Choose & Bid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Select your desired vehicle and we handle the auction bidding process for you.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0 bg-white">
              <CardHeader>
                <Badge variant="premium" className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </Badge>
                <CardTitle className="text-xl mb-2">Export & Ship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We handle all export documentation and coordinate ocean shipping to your port.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0 bg-white">
              <CardHeader>
                <Badge variant="premium" className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </Badge>
                <CardTitle className="text-xl mb-2">Import & Register</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive your vehicle at the destination port and complete local registration.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="brand" size="lg" className="gap-2" asChild>
              <Link href="/import-flow">
                View Detailed Process <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary-700 to-brand-primary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Import Your Dream Car?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-brand-primary-100">
            Get started today and let us help you find and import the perfect Japanese vehicle with complete peace of mind.
          </p>
          <Button variant="accent" size="xl" className="shadow-xl" asChild>
            <Link href="/contact">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}