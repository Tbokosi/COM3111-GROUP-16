import { PrismaClient } from '../src/generated/prisma/index.js';


const prisma = new PrismaClient();

async function main() {
  // --- Clear existing data ---
  await prisma.payment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  console.log("✅ Old data cleared.");

  // --- Users ---
  const users = await prisma.user.createMany({
    data: [
      {
        userName: "john_doe",
        email: "john@example.com",
        password: "hashed_password_123",
        userType: "customer",
      },
      {
        userName: "admin_user",
        email: "admin@example.com",
        password: "hashed_password_admin",
        userType: "admin",
      },
    ],
  });
  console.log("👤 Users added.");

  // --- Products ---
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        brand: "SoundMax",
        description: "Noise-cancelling Bluetooth headphones with 20hr battery life.",
        basePrice: 89,
        categoryID: 1,
        imageUrls: "https://example.com/images/headphones.jpg",
        remaining: 15,
      },
      {
        name: "Smart Watch",
        brand: "TechTime",
        description: "Water-resistant smartwatch with heart rate monitoring.",
        basePrice: 129,
        categoryID: 2,
        imageUrls: "https://example.com/images/smartwatch.jpg",
        remaining: 20,
      },
      {
        name: "Gaming Mouse",
        brand: "HyperClick",
        description: "Ergonomic RGB mouse with 6 programmable buttons.",
        basePrice: 49,
        categoryID: 3,
        imageUrls: "https://example.com/images/mouse.jpg",
        remaining: 30,
      },
    ],
  });
  console.log("🛍️ Products added.");

  // --- Fetch some data for relationships ---
  const john = await prisma.user.findUnique({ where: { email: "john@example.com" } });
  const allProducts = await prisma.product.findMany();

  // --- Cart Items ---
  await prisma.cartItem.createMany({
    data: [
      { userID: john.ID, productID: allProducts[0].ID, quantity: 2 },
      { userID: john.ID, productID: allProducts[1].ID, quantity: 1 },
    ],
  });
  console.log("🛒 Cart items added.");

  // --- Orders ---
  const order = await prisma.order.create({
    data: {
      userID: john.ID,
      totalAmount: 218.00,
      shippingAddress: "123 Green Street, NY",
      orderStatus: "Delivered",
      paymentID: null,
      orderItems: {
        create: [
          {
            productID: allProducts[0].ID,
            quantity: 2,
            unitPriceAtOrder: 89,
          },
        ],
      },
    },
  });

  console.log("📦 Orders added.");

  // --- Payment ---
  await prisma.payment.create({
    data: {
      orderID: order.ID,
      transactionAmount: 178.00,
      paymentMethod: "VISA",
      gatewayTransactionID: 44556677,
      transactionStatus: "Success",
      maskedCardDetails: "**** **** **** 1234",
    },
  });

  console.log("💳 Payment added.");

  console.log("✅ Database seeding completed!");
}

main()
  .catch((err) => {
    console.error("❌ Seed error:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
