# TaxForecast - Quick Start Guide

## 🚀 Installation Steps

### Step 1: Install Dependencies

**For Windows:**
```bash
setup.bat
```

**For macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**Manual Installation:**
```bash
npm install
```

### Step 2: Configure Firebase

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Create Project"
   - Enter "TaxForecast" as project name
   - Follow the setup wizard

2. **Get Firebase Credentials:**
   - In Firebase Console, go to Settings ⚙️
   - Go to "Project settings"
   - Scroll to "Your apps" section
   - Click "Web" to create web app
   - Copy the configuration

3. **Update .env File:**
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### Step 3: Create Firestore Collections

1. In Firebase Console, go to "Firestore Database"
2. Click "Start collection"
3. Create these collections:
   - **contacts** - stores contact form submissions
   - **subscribers** - stores newsletter emails
   - **appointments** - stores appointment bookings
   - **blogs** - stores blog posts

### Step 4: Run Development Server

```bash
npm run dev
```

The application will open at: **http://localhost:5173**

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── data/          # Static data (services, etc)
├── utils/         # Firebase & helper functions
├── App.jsx        # Main component
├── main.jsx       # Entry point
└── index.css      # Global styles
```

## 🔑 Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app component with routing |
| `src/utils/firebase.js` | Firebase configuration |
| `src/utils/db.js` | Database helper functions |
| `src/data/services.js` | Services and testimonials data |
| `tailwind.config.js` | Tailwind CSS configuration |
| `.env` | Environment variables |

## 📱 Available Pages

- `/` - Home/Landing page
- `/services` - All services
- `/services/:serviceId` - Individual service detail
- `/contact` - Contact form
- `/blog` - Blog articles

## 📦 Build for Production

```bash
npm run build
```

Output files will be in `dist/` folder.

## 🎨 Customization

### Update Company Name
Search and replace "TaxForecast" with your company name in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `public/index.html`
- `src/pages/Home.jsx`

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Add New Service
1. Add service object to `src/data/services.js`
2. Service page auto-generates with route `/services/service-id`

### Update Contact Info
Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 🔧 NPM Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📞 Support & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router Documentation](https://reactrouter.com)

## ⚠️ Important Notes

1. **Never commit `.env` file** - Add sensitive credentials only locally
2. **Enable Firestore Security Rules** - Configure in Firebase Console
3. **Test Forms First** - Verify Firestore collections are created
4. **Mobile Testing** - Test on actual devices for responsive design
5. **Performance** - Use Lighthouse to audit performance

## 🚀 Deployment

### Deploy to Firebase Hosting
```bash
npm run build
firebase login
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

---

**Happy building! 🎉**
