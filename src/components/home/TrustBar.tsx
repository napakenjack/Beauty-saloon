import { Star, ShieldCheck, Sparkles } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "4.9/5 on Google",
      subtitle: "Over 300 local reviews",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Certified Experts",
      subtitle: "Master stylists & aestheticians",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Premium Products",
      subtitle: "Olaplex, Dyson & Medical-grade",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 px-4"
            >
              <div className="mb-4 bg-blush p-3 rounded-full">{item.icon}</div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
