export function BookingSteps() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Session",
      description: "Browse our portfolio and select the photography style that fits your needs.",
    },
    {
      number: "02",
      title: "Pick a Photographer",
      description: "Select your preferred artist or let us match you with the best fit.",
    },
    {
      number: "03",
      title: "Confirm Your Time",
      description: "Find a slot that works for you and secure it instantly online.",
    },
  ];

  return (
    <section className="py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
            Seamless Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Booking Made Effortless
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm mb-6 relative z-10">
                <span className="font-serif text-3xl text-primary">{step.number}</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
