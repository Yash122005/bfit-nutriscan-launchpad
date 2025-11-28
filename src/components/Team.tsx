import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  { name: "Pratyush Tripathi", role: "CSE", initials: "PT", image: "https://media.licdn.com/dms/image/v2/D4E03AQGGlxSPknL8CQ/profile-displayphoto-shrink_400_400/B4EZYt1drVHYAg-/0/1744525713107?e=1764806400&v=beta&t=dd2Y7j07PUYf-H1faWxHvAZPBzeMM93sjs8BlEwmwms" },
  { name: "Yash Gupta", role: "ECE", initials: "YG", image: "https://media.licdn.com/dms/image/v2/D5603AQGHlvPTk1ZPfg/profile-displayphoto-scale_200_200/B56Zn9RaT4I0Ac-/0/1760890825900?e=1764806400&v=beta&t=p__-yML69FD4Ct1eMzAGOeo04u-MEEZi0ia2r7ocTsY" },
  { name: "Pratiraj Sinha", role: "AI-ML", initials: "PS", image: "https://instagram.fccu20-1.fna.fbcdn.net/v/t51.2885-19/521534321_18035800151655745_4587456872124883588_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fccu20-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QFLpXFvKfiByccOXN3GB2Xp07KHp2xIeXmaBz6HHyNrAhhBGFj--Wa49Roraef49h0&_nc_ohc=J2EaMNSdkqUQ7kNvwFnXOoz&_nc_gid=evsoIZ7JSKt3xF5KEaaz4A&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfgMMkmXnp4i0X49Davhh-BIC_Rrq-5rmAWVeDLi1qH33w&oe=692F132B&_nc_sid=8b3546" },
  { name: "Kunal Verma", role: "AI-ML", initials: "KV" },
  { name: "Saurav", role: "ECE", initials: "SV" },
  { name: "Adarsh Raj", role: "CSE", initials: "AR" },
];

export const Team = () => {
  return (
    <section className="py-24" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Meet Team OLA</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The minds behind BfIT NutriScan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Avatar className="w-24 h-24 mx-auto mb-6 group-hover:glow-green transition-all">
                <AvatarImage src={member.image || ""} alt={member.name} />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-neon-green to-neon-blue text-background">
                  {member.initials}
                </AvatarFallback>
              </Avatar>

              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
