import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {property.images.length > 0 && (
        <img
          src={property.images[0].url}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.city}</p>
        <p className="font-semibold mb-4">
          ${property.price?.toLocaleString()}
        </p>
        <Link
          href={`/properties/${property.slug}`}
          className="text-blue-700 font-semibold"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
