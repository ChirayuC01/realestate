import { notFound } from "next/navigation";
import { useState } from "react";

type Props = {
  params: { slug: string };
};

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  city: string;
  images: {
    id: number;
    url: string;
  }[];
}

export default async function PropertyDetailPage({ params }: Props) {
  const [property, setProperty] = useState<Property>();
  // const property = await prisma.property.findUnique({
  //   where: { slug: params.slug },
  //   include: { images: true },
  // });

  if (!property) return notFound();

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="mb-2 text-gray-600">{property.city}</p>
      <p className="mb-4">${property.price?.toLocaleString()}</p>
      <p className="mb-6">{property.description}</p>

      {property.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {property.images.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.id}
              src={img.url}
              alt={property.title}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      )}
    </section>
  );
}
