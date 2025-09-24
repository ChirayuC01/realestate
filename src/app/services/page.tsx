import { prisma } from "@/lib/prisma";
import ServiceCard from "@/components/ServiceCard";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      {services.length === 0 ? (
        <p>No services available right now.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
}
