import { motion } from "motion/react";

const team = [
  {
    name: "Elena Rossi",
    role: "Lead Photographer",
    image: "https://picsum.photos/seed/stylist1/400/500",
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    image: "https://picsum.photos/seed/stylist2/400/500",
  },
  {
    name: "Mia Chen",
    role: "Senior Retoucher",
    image: "https://picsum.photos/seed/stylist3/400/500",
  },
];

export function TeamPreview() {
  return (
    <section id="team" className="py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
            Meet the Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            The Artists Behind the Magic
          </h2>
          <p className="text-gray-600 text-lg">
            Our team of certified professionals is dedicated to continuous education and perfecting their craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
