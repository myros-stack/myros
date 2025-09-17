# Myros - Next.js Migration

This project is a Next.js migration of the original Myros landing page, now with modern tooling and authentication UI components.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom Myros theme
- **ShadCN UI** components for authentication
- **Preserved Design** - Identical to original landing page
- **Authentication Pages** - Login, Signup, and Forgot Password (UI only)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Main landing page
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Signup page
│   ├── forgot-password/page.tsx # Password reset page
│   └── globals.css              # Global styles with Myros theme
├── components/
│   ├── ui/                      # ShadCN UI components
│   ├── scroll-reveal.tsx        # Client-side scroll animations
│   └── year-updater.tsx         # Dynamic year display
public/
└── images/                      # Original Myros assets
```

## 🎨 Custom Theme

The project uses your original Myros color palette:
- **ink**: #0a0a0a (dark text)
- **muted**: #475569 (secondary text)
- **line**: #cbd5e1 (borders/dividers)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Form Integration

The waitlist forms continue to use Formspree (https://formspree.io/f/xzzaweqp) as in the original.

## 🔐 Authentication

Authentication UI components are ready but not connected to a backend:
- `/login` - Login form
- `/signup` - Registration form
- `/forgot-password` - Password reset form

These can be easily connected to any authentication service (Supabase, Auth0, etc.) in the future.

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## ✅ Migration Complete

All original functionality has been preserved:
- ✅ Identical visual design and layout
- ✅ Scroll reveal animations
- ✅ Form submissions to Formspree
- ✅ Responsive design
- ✅ Custom Tailwind theme
- ✅ Ready-to-use authentication UI