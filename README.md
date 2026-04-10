# TaxForecast - Professional Tax & Compliance Platform

A production-ready full-stack web application for TaxForecast Chartered Accountant firm built with React, Vite, Tailwind CSS, and Firebase.

## 🎯 Features

- **Landing Page**: Hero section with services overview, testimonials, and CTA
- **Services Page**: Browse all services with detailed descriptions
- **Dynamic Service Pages**: Individual pages for each service with booking forms
- **Contact Page**: Contact form with Google Maps integration
- **Blog Page**: Article management with category filtering
- **Firebase Integration**: Real-time data storage and management
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **Fast Performance**: Optimized with Vite build tool
- **Production-Ready**: Clean code structure and best practices

## 📋 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend / Database
- **Firebase Firestore** - NoSQL database
- **Firebase Auth** - Authentication (optional)

## 📦 Project Structure

```
taxforecast/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── BlogCard.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Contact.jsx
│   │   └── Blog.jsx
│   ├── data/               # Static data files
│   │   └── services.js
│   ├── utils/              # Utility functions
│   │   ├── firebase.js     # Firebase configuration
│   │   └── db.js           # Database operations
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies
└── .env                   # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Get your Firebase configuration credentials
   - Update `.env` file with your Firebase credentials:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

3. **Setup Firestore Collections**
   - Create the following collections in your Firestore database:
     - `contacts` - for contact form submissions
     - `subscribers` - for newsletter subscribers
     - `appointments` - for service appointment bookings
     - `blogs` - for blog posts

### Running the Application

1. **Development Server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Pages Overview

### 1. **Home Page** (`/`)
- Hero section with main CTA buttons
- Services showcase (4 main services displayed)
- "Why Choose Us" section with benefits
- Testimonials carousel
- Newsletter subscription
- Final CTA banner

### 2. **Services Page** (`/services`)
- Grid view of all services (7 total)
- Service categories (Individual & Business)
- Working process steps
- Easy navigation to individual service pages

### 3. **Service Detail Pages** (`/services/:serviceId`)
- Detailed service description
- Key benefits listed
- Step-by-step process breakdown
- Appointment booking form
- FAQ section
- Related CTA

#### Available Services:
- GST Registration
- Income Tax Filing
- Company Registration
- ROC Compliance
- Accounting Services
- E-Invoicing
- Tender Consulting

### 4. **Contact Page** (`/contact`)
- Contact form with validation
- Contact information display
- Business hours
- Social media links
- Google Maps embed
- WhatsApp floating button

### 5. **Blog Page** (`/blog`)
- Blog articles grid
- Category filtering
- Article preview cards
- Subscribe section
- Quick finance tips

## 🔥 Firebase Integration

### Collections Schema

#### contacts
```javascript
{
  name: string,
  email: string,
  phone: string,
  message: string,
  createdAt: timestamp
}
```

#### subscribers
```javascript
{
  email: string,
  createdAt: timestamp
}
```

#### appointments
```javascript
{
  name: string,
  phone: string,
  date: string,
  service: string,
  createdAt: timestamp
}
```

#### blogs
```javascript
{
  title: string,
  content: string,
  category: string,
  icon: string (optional),
  createdAt: timestamp
}
```

## 🎨 Design Features

- **Responsive Design**: All pages work seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Fade-in and slide-up animations for visual appeal
- **Color Scheme**: Professional blue and teal gradient with yellow accents
- **Interactive Elements**: Hover effects and transitions throughout
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized images and lazy loading

## 📱 Key Components

### Navbar
- Sticky navigation with logo
- Mobile hamburger menu
- Quick CTA button
- Links to all main pages

### Footer
- Company branding
- Quick links
- Services links
- Contact information
- Social media links
- WhatsApp floating button

### Service Cards
- Service icon and title
- Short description
- "Learn More" link
- Hover animations

### Blog Cards
- Featured image/icon
- Category badge
- Title and excerpt
- Read more link
- Date display

## 🔐 Security & Best Practices

- Environment variables for sensitive data
- Firestore security rules (configure in Firebase Console)
- Form validation on client side
- Error handling for API calls
- Responsive error messages

## 📝 Customization

### Update Branding
- Logo/brand text: Update in `Navbar.jsx` and `Footer.jsx`
- Colors: Modify color variables in `tailwind.config.js`
- Contact info: Update `Footer.jsx` and `Contact.jsx`

### Add New Services
1. Add service object to `src/data/services.js`
2. Service detail page will be auto-generated

### Modify Styling
- Global styles: `src/index.css`
- Component-specific: Use Tailwind classes in JSX
- Theme colors: `tailwind.config.js`

## 🚀 Deployment

### Deploy to Firebase Hosting
```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```

### Deploy to Vercel
```bash
npm run build
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📞 Support

For issues, questions, or customization requests:
- Email: hello@taxforecast.in
- Phone: +91 98765 43210
- Website: https://taxforecast.in

## 📄 License

Copyright © 2024 TaxForecast. All rights reserved.

## 🙏 Acknowledgments

Built with modern web technologies to provide a professional, fast, and user-friendly experience for tax and compliance services.

---

**Last Updated**: April 2024
**Version**: 1.0.0
