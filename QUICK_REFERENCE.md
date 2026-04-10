# 🚀 TAXFORECAST - QUICK REFERENCE CARD

## ⚡ Get Started in 60 Seconds

```bash
# 1. Install dependencies
npm install

# 2. Update .env with Firebase credentials
# (Edit .env file)

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📱 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with services overview |
| Services | `/services` | All 7 services listing |
| Service Detail | `/services/:serviceId` | Single service page with booking |
| Contact | `/contact` | Contact form + map + info |
| Blog | `/blog` | Blog articles with categories |

---

## 🔑 Firebase Setup (Required)

1. Create project at: https://console.firebase.google.com
2. Get web app credentials
3. Update `.env` file:

```env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_FIREBASE_MEASUREMENT_ID=xxx
```

4. Create Firestore collections: `contacts`, `subscribers`, `appointments`, `blogs`

---

## 🎯 NPM Commands

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
```

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app & routing |
| `src/pages/` | All page components |
| `src/components/` | Reusable components |
| `src/data/services.js` | Services & testimonials |
| `src/utils/firebase.js` | Firebase config |
| `src/utils/db.js` | Database functions |
| `.env` | Firebase credentials |
| `tailwind.config.js` | Color & theme config |

---

## 🎨 Available Services

1. **GST Registration** - `/services/gst-registration`
2. **Income Tax Filing** - `/services/income-tax-filing`
3. **Company Registration** - `/services/company-registration`
4. **ROC Compliance** - `/services/roc-compliance`
5. **Accounting Services** - `/services/accounting`
6. **E-Invoicing** - `/services/e-invoicing`
7. **Tender Consulting** - `/services/tender-consulting`

---

## 🔥 Firebase Collections

### contacts
```
{
  name, email, phone, message, createdAt
}
```

### subscribers
```
{
  email, createdAt
}
```

### appointments
```
{
  name, phone, date, service, createdAt
}
```

### blogs
```
{
  title, content, category, icon, createdAt
}
```

---

## 🎨 Customize

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Update Company Info
- **Navbar**: `src/components/Navbar.jsx`
- **Footer**: `src/components/Footer.jsx` (Line 50-72)
- **Contact**: `src/pages/Contact.jsx` (Line 87-124)
- **WhatsApp**: `src/components/Footer.jsx` (Line 167)

### Add Service
Edit `src/data/services.js` - adds dynamic pages automatically!

---

## 📊 Tech Stack

| Technology | Version | Use |
|-----------|---------|-----|
| React | 18.2.0 | UI Library |
| Vite | 5.0.8+ | Build Tool |
| Tailwind CSS | 3.4.1+ | Styling |
| Firebase | 10.7.0+ | Backend |
| React Router | 6.21.0+ | Routing |
| Lucide React | 0.292.0+ | Icons |

---

## 🚀 Deploy

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Vercel
```bash
npm run build
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| npm won't run | Check Node.js: `node --version` |
| Blank page | Check .env Firebase config |
| Forms not working | Verify Firestore collections exist |
| Port in use | `npm run dev -- --port 3000` |

---

## 📚 Documentation

- **README.md** - Full documentation
- **QUICKSTART.md** - Detailed setup
- **START_HERE.md** - Getting started
- **FEATURES.md** - All features list
- **PROJECT_COMPLETION.md** - Project overview

---

## ✅ Pre-Launch Checklist

- [ ] npm install complete
- [ ] .env configured with Firebase
- [ ] Firestore collections created
- [ ] Forms tested
- [ ] Company info updated
- [ ] Mobile tested
- [ ] Build successful: `npm run build`

---

## 🎉 You're Ready!

This is a **production-ready** app with:
- ✅ Full React frontend
- ✅ Firebase backend
- ✅ Responsive design
- ✅ Form integration
- ✅ SEO-friendly
- ✅ Deployment-ready

**Happy launching! 🚀**

---

*Quick Reference | TaxForecast v1.0.0 | April 2024*
