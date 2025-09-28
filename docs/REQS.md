# Electronic Gadget E-commerce Platform

It describes requirements for an online gadget ordering system. The system will allow users to view the types of gadgets, compare with other gadgets, and purchase different gadgets. The system supports secure transactions, efficient order fulfillment, and smooth user experience.

The Gadget E-Commerce System is a **web platform** providing a digital marketplace for electronic gadgets like smartphones, laptops, tablets, and accessories. It integrates multiple modules—frontend, order service, inventory service, and payment service—to deliver a seamless shopping experience. It connects to external payment gateways while maintaining its own product catalog and order database.

## Functional Requirements

### Frontend
- Fr1: Handles all customer-facing interactions.
- Fr2: Allow customers to register, log in, and manage profiles.
- Fr3: Browse gadget catalog by categories, filters, and search.
- Fr4: View gadget details (specs, images).
- Fr5: Manage shopping cart (add, remove, update items).
- Fr6: Maintain Wishlists for later purchases.
- Fr7: Proceed through checkout (payment selection).

### Order Service
- Fr1: Responsible for processing and managing customer orders.
- Fr2: Receive orders from front-end after checkout. Create and store order records (order ID, customer, items, total, status).
- Fr3: Update order status.
- Fr4: Order modification (cancellation before shipping, returns after delivery).
- Fr5: Track and provide order history per customer.

### Inventory Service
- Fr1: Manages gadget availability and stock levels.
- Fr2: Maintain product catalog (name, brand, specs, price, category).
- Fr3: Track stock levels for each gadget. Update inventory on purchase, cancellation, or return.
- Fr4: Notify order service when items are out of stock.
- Fr5: Support product categorization and filtering (smartphones, laptops, accessories).
- Fr6: Provide APIs for search, browse, and product details to front-end. Alert admin when stock is low.

### Payment Service
- Fr1: Handles transactions securely and reliably.
- Fr2: Accept multiple payment methods such as credit/debit cards and mobile money payments.
- Fr3: Validate and authorize payments through external gateways (e.g., paychangu).
- Fr4: Generate payment receipts and confirmation. Link payments to corresponding orders.
- Fr5: Handle refunds for cancelled/returned orders.

## Frontend Quality Attributes

- **Performance**
  - Pages should load within a few seconds under normal load.

- **Usability**
  - Must be responsive on all devices (desktop, tablet, mobile).
  - Follow accessibility standards.
  - Provide clear navigation and filters.

- **Availability**
  - The system should be available at all times.

- **Security**
  - All communication with backend over HTTPS.
  - Prevent attacks on the UI.

## Order Service Quality Attributes

- **Performance**
  - Must process an order request within a few seconds on average.

- **Reliability**
  - Ensure no duplicate orders during high traffic.
  - Orders must not be lost, even if payment fails—pending orders should be logged.

- **Availability**
  - Critical to keep system available most of the time.

- **Security**
  - Enforce authentication before order creation.
  - Order history must be accessible only to authorized users.

## Inventory Service Quality Attributes

- **Performance**
  - Stock updates must reflect promptly.
  - Support large product catalogs.

- **Scalability**
  - Must scale horizontally to handle catalog growth and seasonal demand.

- **Reliability / Maintainability**
  - Inventory count must remain consistent even during concurrent orders.

- **Security**
  - Only admins can update stock data.
  - All updates must be logged for audit purposes.

## Payment Service Quality Attributes

- **Performance**
  - Payment authorization must complete within seconds.

- **Availability**
  - Must maintain high uptime due to critical role.

- **Security**
  - Compliance with card data regulations.
  - Encrypt all sensitive payment details.

- **Reliability**
  - Ensure payment is always linked to an order (no orphaned payments).
  - Guarantee atomicity—order is confirmed only if payment succeeds.

- **Compliance**
  - Follow regional financial regulations.

## Components (Actors)
- Customer / Buyer
- Admin / Store Owner
- Payment Gateway / Payment Service (e.g., PayPal, Mobile Money, Stripe)
- Notification Service (Email/SMS/Push Sender)
