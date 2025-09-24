import { Service } from "@prisma/client";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-6">
      <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
}
