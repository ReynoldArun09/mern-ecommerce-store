# 🚀 One stop - MERN Stack Ecommerce Application

One Stop web application built with **MERN stack** (MongoDB, Express, React, Node.js). offering features like user authentication, admin dashboard, product management, shopping cart, coupon, stripe payment.

## 🔗 Links

- Live Demo: https://one-stop-ecommerce.netlify.app/
- Repository: https://github.com/ReynoldArun09/mern-ecommerce-store

## 🛠️ Technologies Used

- **Frontend:**

  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Shadcn UI
  - React Hook Form
  - Zod for validation
  - Tanstack Query
  - Axios

- **Backend:**

  - Node.js
  - Express
  - MongoDB (with Mongoose)
  - TypeScript
  - Winston for logging
  - Jest

## 📦 Deployment

- **Frontend:** Netlify
- **Backend:** Render
- **Database:** MongoDB Atlas

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Express v4
- MongoDB
- Stripe Account
- Cloudinary Account

### Installation

1. **Clone Repository**

   ```bash
   git clone https://github.com/ReynoldArun09/mern-ecommerce-store
   cd mern-ecommerce-store
   ```

2. **Environment Configuration**
   Create `.env` files:

   **Backend `.env`**

   ```env
   NODE_ENV=development
   PORT=3000
   MONGO_DB_URI=mongodb://localhost:27017/yourdb
   ACCESS_TOKEN_SECRET=youraccesstokensecret
   REFRESH_TOKEN_SECRET=yourrefreshtokensecret
   CORS_ORIGIN = http://localhost:5173
   STRIPE_SECRET_KEY=your_stripe_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

   **Frontend `.env`**

   ```env
   VITE_APP_ENV=development
   VITE_BACKEND_ENV=http://localhost:3000/api/v1
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

3. **Install Dependencies**

   ```bash
   # Backend
   cd server
   npm install

   # Frontend
   cd ../client
   npm install
   ```

4. **Run Development Servers**

   ```bash
   # Backend (port 3000)
   cd server
   npm run dev

   # Frontend (port 5173)
   cd client
   npm run dev
   ```

## 🧪 Testing

```bash
# Backend Tests
cd server
npm run test

```
