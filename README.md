﻿# VSHOP eCommerce Platform
<p>eCommerce platform built with the MERN stack & Redux.</p>
<h3>Features</h3>
<hr/>
<ul>
  <li>Full featured shopping cart</li>
<li>Product reviews and ratings</li>
<li>Top products carousel</li>
<li>Product pagination</li>
<li>Product search feature</li>
<li>User profile with orders</li>
<li>Admin product management</li>
<li>Admin user management</li>
<li>Admin Order details page</li>
<li>Mark orders as delivered option</li>
<li>Checkout process (shipping, payment method, etc)</li>
<li>PayPal / credit card integration</li>
<li>Database seeder (products & users)</li>
  </ul>
 <h3>Usage</h3>
 <hr/>
 <h4>ES Modules in Node</h4>
 <p>We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like</p>
<h4>Env Variables</h4>
<p>Create a .env file in then root and add the following</p>
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
<h4>Install Dependencies (frontend & backend)</h4>
npm install
cd frontend
npm install
<h4>Run</h4>
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
<h4>Build and Deploy</h4>
# Create frontend prod build
cd frontend
npm run build
<hr/>
Sample User Logins

admin@gmail.com (Admin)
12345

vijay@gmail.com (Customer)
12345
