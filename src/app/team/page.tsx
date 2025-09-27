import TeamMemberCard from "@/components/TeamMemberCard";
import PageTitle from "@/components/PageTitle";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
  tags: {
    id: number;
    name: string;
  }[];
}

export default async function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  // const teamMembers = await prisma.teamMember.findMany({
  //   include: { tags: true },
  //   orderBy: { id: "asc" },
  // });

  return (
    <div>
      <PageTitle
        title="Meet Our Experts"
        description="A dedicated team of professionals committed to your success."
      />
      <section className="container mx-auto py-10 ">
        {teamMembers.length === 0 ? (
          <p className="text-center">No team members found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
