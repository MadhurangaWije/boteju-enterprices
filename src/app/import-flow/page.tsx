import { importSteps } from '@/lib/dummyData';

export default function ImportFlowPage() {
  const totalTimelineMinMonths = 2;
  const totalTimelineMaxMonths = 4;
  const estimatedTotalCost = '$2000 - $4000';

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Vehicle Import Process</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A detailed breakdown of our transparent import process from Japan to your location
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {totalTimelineMinMonths}-{totalTimelineMaxMonths}
              </div>
              <div className="text-gray-600">Months Total Timeline</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {importSteps.filter(step => step.isCompanyHandled).length}
              </div>
              <div className="text-gray-600">Steps We Handle</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {estimatedTotalCost}
              </div>
              <div className="text-gray-600">Estimated Additional Costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Step-by-Step Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {importSteps.map((step, index) => (
              <div key={step.id} className="flex mb-12">
                <div className="flex-shrink-0 mr-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    step.isCompanyHandled 
                      ? 'bg-primary-600' 
                      : 'bg-orange-500'
                  }`}>
                    {step.id}
                  </div>
                  {index < importSteps.length - 1 && (
                    <div className="w-0.5 bg-gray-300 h-16 mx-auto mt-4"></div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {step.title}
                      </h3>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          step.isCompanyHandled 
                            ? 'bg-primary-100 text-primary-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {step.isCompanyHandled ? 'We Handle This' : 'Customer Handles'}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    {step.cost && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">
                          💰 Cost: {step.cost}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Cost Breakdown
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <h3 className="text-xl font-semibold">Typical Import Costs</h3>
                <p className="text-primary-100">Costs may vary based on vehicle and destination</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Vehicle Purchase Price</span>
                  <span className="font-medium">$15,000 - $80,000+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Our Service Fees</span>
                  <span className="font-medium">$500 - $1,200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Export Documentation</span>
                  <span className="font-medium">$200 - $400</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Ocean Shipping</span>
                  <span className="font-medium">$800 - $2,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Import Duties & Taxes</span>
                  <span className="font-medium text-orange-600">Varies by country</span>
                </div>
                <div className="flex justify-between items-center py-2 font-semibold text-lg">
                  <span>Additional Costs Range</span>
                  <span className="text-primary-600">$1,500 - $4,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                How long does the entire process take?
              </h3>
              <p className="text-gray-600">
                The complete process typically takes 2-4 months from bidding to delivery, 
                depending on shipping schedules and customs processing times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Are there any hidden costs?
              </h3>
              <p className="text-gray-600">
                We provide transparent pricing with detailed cost breakdowns. The only variables 
                are import duties and local registration fees, which vary by destination country.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                What if the vehicle has issues after import?
              </h3>
              <p className="text-gray-600">
                All vehicles come with detailed auction sheets and condition reports. We also 
                provide additional inspection services and can arrange pre-purchase inspections.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Can you help with vehicle modifications for local compliance?
              </h3>
              <p className="text-gray-600">
                Yes, we can connect you with certified modification shops in your area to ensure 
                your vehicle meets local safety and emissions requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Import Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Quote
            </a>
            <a 
              href="/vehicles"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Browse Vehicles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}