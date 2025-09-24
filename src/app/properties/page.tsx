import { prisma } from "@/lib/prisma";
import PropertyCard from "@/components/PropertyCard";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    include: { images: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
      {properties.length === 0 ? (
        <p>No properties available right now.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
}
