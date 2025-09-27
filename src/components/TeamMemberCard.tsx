export default function TeamMemberCard({ member }: any) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-6 text-center">
      {member.photoUrl && (
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      <h2 className="text-xl font-bold">{member.name}</h2>
      <p className="text-gray-600 mb-2">{member.role}</p>
      {member.bio && <p className="text-gray-700 text-sm mb-3">{member.bio}</p>}

      {/* Tags */}
      {member.tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {member.tags.map((tag: any) => (
            <span
              key={tag.id}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
