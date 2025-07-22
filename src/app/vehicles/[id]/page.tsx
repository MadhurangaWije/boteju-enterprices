'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allVehicles } from '@/lib/dummyData';
import { Vehicle } from '@/types';

interface VehicleDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const resolvedParams = use(params);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAuctionSheet, setShowAuctionSheet] = useState(false);

  const vehicle = allVehicles.find(v => v.id === resolvedParams.id);
  
  if (!vehicle) {
    notFound();
  }

  const estimatedImportCost = Math.round(vehicle.price * 0.15); // Rough 15% estimate

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-6">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/vehicles" className="hover:text-primary-600">Vehicles</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{vehicle.year} {vehicle.make} {vehicle.model}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={vehicle.images[selectedImageIndex]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {vehicle.images.length}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
              {vehicle.auctionSheet && (
                <button
                  onClick={() => setShowAuctionSheet(true)}
                  className="relative h-20 rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center hover:border-primary-600 transition-colors"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Auction</div>
                    <div className="text-xs text-gray-600">Sheet</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Vehicle Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  {vehicle.condition}
                </span>
                <span>📍 {vehicle.location}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-primary-50 p-6 rounded-xl mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">
                    ${vehicle.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    + Est. ${estimatedImportCost.toLocaleString()} import costs
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-800">
                    Total Est.
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    ${(vehicle.price + estimatedImportCost).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Engine</div>
                <div className="font-semibold">{vehicle.engineSize}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Mileage</div>
                <div className="font-semibold">{vehicle.mileage.toLocaleString()} km</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Transmission</div>
                <div className="font-semibold">{vehicle.transmission}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Fuel Type</div>
                <div className="font-semibold">{vehicle.fuelType}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Body Type</div>
                <div className="font-semibold">{vehicle.bodyType}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Color</div>
                <div className="font-semibold">{vehicle.color}</div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-600">{vehicle.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/contact"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
              >
                Inquire About This Vehicle
              </Link>
              <Link
                href="/import-flow"
                className="w-full border border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center block"
              >
                Learn Import Process
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Import Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Timeline</span>
                <span className="font-medium">2-4 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Documentation</span>
                <span className="font-medium">Export Certificate Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Ocean Freight Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Inspection</span>
                <span className="font-medium">Pre-purchase Available</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Why Choose This Vehicle?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Detailed auction sheet available
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Professional condition assessment
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Full service import support
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Transparent pricing breakdown
              </li>
            </ul>
          </div>
        </div>

        {/* Related Vehicles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Similar Vehicles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {allVehicles
              .filter(v => v.id !== vehicle.id && v.make === vehicle.make)
              .slice(0, 3)
              .map((relatedVehicle) => (
                <Link
                  key={relatedVehicle.id}
                  href={`/vehicles/${relatedVehicle.id}`}
                  className="block bg-white rounded-xl shadow-md overflow-hidden card-hover"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedVehicle.images[0]}
                      alt={`${relatedVehicle.year} ${relatedVehicle.make} ${relatedVehicle.model}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800">
                      {relatedVehicle.year} {relatedVehicle.make} {relatedVehicle.model}
                    </h4>
                    <p className="text-primary-600 font-bold">
                      ${relatedVehicle.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Auction Sheet Modal */}
      {showAuctionSheet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">Auction Sheet</h3>
              <button
                onClick={() => setShowAuctionSheet(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              {vehicle.auctionSheet && (
                <div className="relative">
                  <Image
                    src={vehicle.auctionSheet}
                    alt="Auction Sheet"
                    width={600}
                    height={800}
                    className="w-full rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}