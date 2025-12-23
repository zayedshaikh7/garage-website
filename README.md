# AutoCare Garage - Complete Website

A modern, fully responsive website for an automobile service center built with React, TypeScript, Tailwind CSS, Express.js, and Supabase.

## Features

- **Hero Section** - Eye-catching landing with call-to-action
- **About Section** - Company story and key features
- **Services Section** - 6 service offerings with icons and descriptions
- **Pricing Section** - 3 service packages with detailed features
- **Gallery Section** - Photo showcase of the facility
- **Testimonials** - Customer reviews and ratings
- **Contact Section** - Booking form with Google Maps integration
- **Footer** - Social links, hours, and contact information

## Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- Supabase (database)
- CORS enabled

## Project Structure

```
autocare-garage/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── supabase.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   └── index.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running the Application

#### Frontend (Development)
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

#### Backend (API Server)
```bash
npm run server
```
The backend API will run on `http://localhost:3000`

For development with auto-reload:
```bash
npm run server:dev
```

#### Production Build
```bash
npm run build
```

## Database Schema

The application uses Supabase with the following table:

### bookings
- `id` (uuid, primary key)
- `name` (text)
- `phone` (text)
- `email` (text)
- `car_model` (text)
- `service_type` (text)
- `preferred_date` (date)
- `status` (text, default: 'pending')
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

## API Endpoints

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get a specific booking
- `PUT /api/bookings/:id` - Update booking status
- `DELETE /api/bookings/:id` - Delete a booking

## Features Breakdown

### 1. Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Hamburger menu for mobile navigation

### 2. Smooth Scrolling
- Navigation links scroll smoothly to sections
- Call-to-action buttons navigate to contact form

### 3. Form Handling
- Real-time form validation
- Success/error messages
- Data saved to Supabase database

### 4. Modern UI/UX
- Clean, professional design
- Hover effects and transitions
- Card-based layouts
- Icon integration with Lucide React

### 5. SEO Optimized
- Meta tags for search engines
- Open Graph tags for social sharing
- Semantic HTML structure

## Customization

### Colors
The default color scheme uses blue as the primary color. To change:
- Update Tailwind classes in components (e.g., `bg-blue-600` to `bg-green-600`)
- Modify the `tailwind.config.js` for custom colors

### Images
- Hero background: Update the `backgroundImage` URL in `Hero.tsx`
- Gallery images: Update the `images` array in `Gallery.tsx`
- All images currently use Pexels stock photos

### Content
- Update text content in each component file
- Modify service offerings in `Services.tsx`
- Change pricing plans in `Pricing.tsx`
- Update testimonials in `Testimonials.tsx`

## Deployment

### Frontend
Deploy to Vercel, Netlify, or any static hosting service:
```bash
npm run build
```
Upload the `dist` folder.

### Backend
Deploy to:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

Set environment variables on your hosting platform.

## License

MIT

## Support

For issues or questions, contact: info@autocaregarage.com
