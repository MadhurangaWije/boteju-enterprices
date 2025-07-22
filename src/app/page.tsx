import Image from 'next/image';
import Link from 'next/link';
import VehicleCard from '@/components/VehicleCard';
import { featuredVehicles } from '@/lib/dummyData';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block trust-badge mb-6 energy-pulse">
            ✨ Trusted by 500+ Happy Customers
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
            Quality Japanese Vehicles
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto text-primary-100 leading-relaxed">
            <span className="font-bold text-accent-400">Clear Prices.</span> <span className="font-bold text-secondary-400">Clean Deals.</span> <span className="font-bold text-highlight-yellow">Quality Rides.</span>
            <br />
            Import premium Japanese cars directly from Japan with complete transparency and professional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              href="/vehicles"
              className="bg-gradient-to-r from-highlight-yellow to-accent-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-highlight-yellow/90 hover:to-accent-600 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              🚗 Browse Vehicles
            </Link>
            <Link 
              href="/import-flow"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              📋 Learn Process
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold">Fast Processing</div>
              <div className="text-primary-200">2-4 months delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-semibold">Quality Assured</div>
              <div className="text-primary-200">Detailed inspections</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-semibold">Best Prices</div>
              <div className="text-primary-200">No hidden costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-100 via-neutral-200 to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-700 to-primary-teal bg-clip-text text-transparent">
            Why Choose Boteju Enterprises?
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            Experience the difference with our transparent, reliable, and customer-focused approach
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-700 to-primary-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 energy-pulse">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Direct from Japan</h3>
              <p className="text-neutral-600 leading-relaxed">
                Access to authentic Japanese vehicles directly from auctions and dealerships across Japan. 
                No middlemen, no markup.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 energy-pulse">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Quality Assured</h3>
              <p className="text-neutral-600 leading-relaxed">
                Every vehicle is thoroughly inspected with detailed auction sheets and condition reports. 
                Your trust is our priority.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 energy-pulse">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Full Service</h3>
              <p className="text-neutral-600 leading-relaxed">
                End-to-end service from bidding to delivery, handling all documentation and logistics. 
                Sit back and relax.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Featured Vehicles
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked premium vehicles ready for import
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/vehicles"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Simple Import Process
            </h2>
            <p className="text-lg text-gray-600">
              We make importing Japanese vehicles straightforward and transparent
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose & Bid</h3>
              <p className="text-gray-600">
                Select your desired vehicle and we handle the auction bidding process for you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Export & Ship</h3>
              <p className="text-gray-600">
                We handle all export documentation and coordinate ocean shipping to your port.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Import & Register</h3>
              <p className="text-gray-600">
                Receive your vehicle at the destination port and complete local registration.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/import-flow"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Detailed Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Import Your Dream Car?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started today and let us help you find and import the perfect Japanese vehicle.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}