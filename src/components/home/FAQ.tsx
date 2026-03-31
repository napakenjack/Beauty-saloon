import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How should I prepare for my first session?",
    answer: "Please arrive 10 minutes early to fill out any necessary consultation forms. Bring any outfits or props you'd like to use during your session.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for cancellations or rescheduling. Sessions canceled within 24 hours will incur a 50% charge of the service booked.",
  },
  {
    question: "Do you offer consultations before booking?",
    answer: "Yes! We highly recommend a complimentary 15-minute consultation for any major projects, events, or advanced commercial shoots to ensure we book the correct amount of time.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have dedicated complimentary parking located directly behind the studio building.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-alabaster hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-xl text-charcoal">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0 ml-4" />
                )}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
