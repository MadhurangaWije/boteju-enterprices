# Boteju Enterprises - Japanese Vehicle Import

A professional Next.js website for importing Japanese vehicles directly from Japan.  
**"Clear Prices. Clean Deals. Quality Rides."**

## Features

- **Homepage**: Hero section with featured vehicles and company overview
- **Vehicle Listing**: Comprehensive vehicle inventory with filtering and sorting
- **Vehicle Details**: Detailed individual vehicle pages with image galleries and auction sheets
- **Import Process**: Step-by-step explanation of the import process with timeline and costs
- **About Us**: Company information and team details
- **Contact**: Contact form with business information
- **Responsive Design**: Mobile-friendly design with professional styling

## Tech Stack

- **Next.js 15.4.2** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Modern React with hooks

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About us page
│   ├── contact/           # Contact page with form
│   ├── import-flow/       # Import process explanation
│   ├── vehicles/          # Vehicle listing and detail pages
│   │   └── [id]/         # Dynamic vehicle detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── loading.tsx       # Loading component
│   └── not-found.tsx     # 404 page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── VehicleCard.tsx   # Vehicle display card
├── lib/                   # Utility functions
│   └── dummyData.ts      # Sample vehicle data
└── types/                # TypeScript type definitions
    └── index.ts
```

## Key Components

### Vehicle Management
- Vehicle type definitions with comprehensive details
- Featured vehicle showcase on homepage
- Filterable and sortable vehicle listing
- Individual vehicle detail pages with image galleries
- Auction sheet display functionality

### Import Process
- Step-by-step process explanation
- Timeline and cost breakdowns
- Clear distinction between company-handled and customer-handled steps
- FAQ section

### Responsive Design
- Mobile-first approach
- Professional color scheme
- Hover effects and smooth transitions
- Card-based layout for vehicles

## Customization

### Adding New Vehicles
1. Update the vehicle data in `src/lib/dummyData.ts`
2. Add new images to the `images` array
3. Include auction sheet URLs if available

### Modifying Styling
- Main colors are defined in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Backend Integration
The website is currently using dummy data. To integrate with a real backend:

1. Replace the dummy data imports with API calls
2. Add loading states for data fetching
3. Implement form submission endpoints
4. Add user authentication if required

## Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Future Enhancements

- User authentication and accounts
- Favorites/wishlist functionality
- Advanced search with more filters
- Real-time inventory updates
- Payment integration
- Live chat support
- Multi-language support
- Admin dashboard for inventory management

## Support

For questions or support, please contact the development team.