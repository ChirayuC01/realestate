import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Properties
  const property = await prisma.property.create({
    data: {
      title: "Luxury Villa with Ocean View",
      slug: "luxury-villa-ocean-view",
      description:
        "A stunning villa with panoramic ocean views, 5 bedrooms, and private pool.",
      address: "123 Ocean Drive",
      city: "Miami",
      state: "FL",
      zip: "33101",
      country: "USA",
      type: "Villa",
      status: "For Sale",
      price: 2500000,
      bedrooms: 5,
      bathrooms: 4,
      areaSqFt: 4500,
      images: {
        create: [
          { url: "https://example.com/villa1.jpg" },
          { url: "https://example.com/villa2.jpg" },
        ],
      },
    },
  });

  // Seed Team Members
  const teamMember = await prisma.teamMember.create({
    data: {
      name: "John Doe",
      role: "CEO",
      bio: "Visionary leader with 15 years of experience in real estate.",
      photoUrl: "https://example.com/john.jpg",
      tags: {
        create: [{ name: "Leadership" }, { name: "Strategy" }],
      },
    },
  });

  // Seed Blogs
  const blog = await prisma.blog.create({
    data: {
      title: "Top 10 Tips for Buying Your First Home",
      author: "Jane Smith",
      slug: "top-10-tips-buying-first-home",
      excerpt:
        "Buying your first home can be overwhelming. Here are 10 tips to help you succeed.",
      content: "Full blog content goes here...",
      published: true,
      publishedAt: new Date(),
      images: {
        create: [
          { url: "https://example.com/blog1.jpg" },
          { url: "https://example.com/blog2.jpg" },
        ],
      },
    },
  });

  // Seed Contact Messages
  const contact = await prisma.contactMessage.create({
    data: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      phone: "1234567890",
      message: "I would like more information about the Luxury Villa.",
    },
  });

  console.log({ property, teamMember, blog, contact });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
