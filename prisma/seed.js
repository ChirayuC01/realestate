const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.service.createMany({
    data: [
      {
        title: "Distressed Property Solutions",
        description:
          "We identify, evaluate, and structure deals for distressed assets.",
      },
      {
        title: "Legal, Taxation & Insolvency Advisory",
        description:
          "Navigate complex legal frameworks and insolvency processes.",
      },
      {
        title: "End-to-End Support",
        description: "From due diligence to final sale, we manage every step.",
      },
    ],
  });

  await prisma.teamMember.createMany({
    data: [
      {
        name: "Alice Johnson",
        role: "Managing Partner",
        bio: "15+ years experience",
      },
      {
        name: "Bob Smith",
        role: "Acquisitions Lead",
        bio: "Expert in distressed assets",
      },
    ],
  });

  await prisma.property.create({
    data: {
      title: "Vintage Apartment near Eiffel Tower",
      slug: "vintage-eiffel-apartment",
      description:
        "Lovely 2-bedroom apartment with a view of the Eiffel Tower.",
      city: "Paris",
      price: 450000,
      bedrooms: 2,
      bathrooms: 1,
      areaSqFt: 850,
      images: {
        create: [
          { url: "https://via.placeholder.com/400x300.png?text=Apartment+1" },
        ],
      },
    },
  });

  await prisma.blog.create({
    data: {
      title: "How to Price Distressed Property",
      slug: "how-to-price-distressed-property",
      excerpt: "Learn the basics of pricing distressed assets...",
      content: "Full blog content here...",
      published: true,
      publishedAt: new Date(),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
