import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Pubudu Boteju',
      role: 'Founder & CEO',
      image: '/images/pubudu-dp.jpg',
      bio: 'With over 15 years in the automotive industry, Pubudu founded Boteju Enterprises to bridge the gap between Japanese quality and global accessibility with transparent pricing and exceptional service.',
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Sarah manages our day-to-day operations and ensures every vehicle import process runs smoothly from start to finish.',
    },
    {
      name: 'David Rodriguez',
      role: 'Vehicle Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'David brings deep expertise in Japanese automotive markets and helps clients find their perfect vehicle match.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Vehicles Imported' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' },
    { number: '98%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Boteju Enterprises</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Clear Prices. Clean Deals. Quality Rides. Your trusted partner in bringing premium Japanese vehicles worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, Boteju Enterprises began with a simple mission: to make high-quality 
                  Japanese vehicles accessible to customers around the world with complete transparency. 
                  What started as a small operation has grown into a trusted international business 
                  serving clients across multiple continents.
                </p>
                <p>
                  Our founder, Pubudu Boteju, recognized the gap between the exceptional quality 
                  of Japanese automotive engineering and the challenges international customers faced 
                  in accessing these vehicles at fair prices. With deep roots in Japan's automotive industry and 
                  extensive knowledge of international trade, he set out to create a seamless 
                  bridge between Japanese excellence and global demand.
                </p>
                <p>
                  Today, we continue to uphold our founding principles: Clear Prices, Clean Deals, Quality Rides. 
                  We leverage modern technology and transparent processes to serve our growing international clientele 
                  with honest pricing and exceptional service.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486473275207-36aced8fc648?w=600&h=400&fit=crop"
                alt="Our Tokyo office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to excellence in every aspect of our service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every vehicle we source undergoes rigorous inspection and comes with detailed 
                documentation to ensure you receive exactly what you expect.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden costs, no surprises. We provide detailed breakdowns of all expenses 
                and keep you informed throughout the entire import process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                From initial consultation to final delivery, our dedicated team provides 
                personalized support to make your import experience smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Boteju Enterprises?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Direct Access to Japanese Markets
              </h3>
              <p className="text-gray-600">
                Our Tokyo-based operations give us direct access to Japanese auctions, 
                dealerships, and exclusive inventory that others can't reach.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                End-to-End Service
              </h3>
              <p className="text-gray-600">
                From vehicle selection to final delivery, we handle every aspect of the 
                import process so you can focus on enjoying your new vehicle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Our established relationships and efficient processes allow us to offer 
                competitive pricing while maintaining the highest service standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                With over 500 successful imports and a 98% customer satisfaction rate, 
                our track record speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Import Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experienced team today and let us help you find and import your perfect Japanese vehicle.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}