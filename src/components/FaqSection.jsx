'use client';
import { useState } from 'react';
import { FaChevronDown, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


const faqs = [
  {
    question: "What engineering and R&D services does Ulterior Engineering provide?",
    answer: "We specialize in Industrial Automation (PLC, SCADA), Robotics Systems, Custom Embedded Hardware/Firmware Design, and Artificial Intelligence for industrial quality inspection."
  },
  {
    question: "How can we start a custom R&D project with your team?",
    answer: "You can send us your initial requirements through the query form or schedule a consultation. Our team will review the specs, perform a technical feasibility study, and provide a roadmap."
  },
  {
    question: "Do you provide on-site installation and support in Bangladesh?",
    answer: "Yes, our primary engineering base is in Chattogram, Bangladesh. We provide full on-site deployment, hardware testing, and ongoing technical support across the country."
  },
  {
    question: "Can you retrofit existing factory machinery with smart IoT controllers?",
    answer: "Absolutely. We design custom IoT gateways and edge sensor nodes that integrate seamlessly with legacy industrial machinery to enable real-time cloud monitoring."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: FAQ Accordion & Contact Details (Like 1st Image) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest block mb-2">
                Have Any Questions?
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                You Have Questions, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  We Have Answers.
                </span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
                Explore how Ulterior Engineering pioneers custom industrial robotics, embedded systems, and R&D solutions tailored for your business.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4 pt-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#0F141C] border border-slate-800/80 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 hover:text-cyan-400 transition-colors"
                  >
                    <span className="font-semibold text-slate-200 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`text-cyan-400 shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-5 text-slate-400 text-sm border-t border-slate-800/50 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Left Bottom Quick Info (Location & Contact) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-800/60 text-xs text-slate-400">
              <div>
                <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" /> Location
                </h4>
                <p>4th Floor, K.B. Plaza, Chatteshwari Road,</p>
                <p>Chittagong, Bangladesh-4203</p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-cyan-400" /> Contact Info
                </h4>
                <p>Email: <a href="mailto:info@ulterior.com.bd" className="text-slate-300 hover:text-cyan-400">info@ulterior.com.bd</a></p>
                <p className="flex items-center gap-1 mt-1">
                  <FaPhoneAlt className="text-slate-500" /> +880 1818-988959
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Query Form Card (Fields from 2nd Image) */}
          <div className="lg:col-span-5 bg-[#111622] border border-slate-800 p-8 rounded-3xl shadow-2xl relative">
            
            {/* Form Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Any query?
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Our R&D engineering team is ready to assist you with every technical detail.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              {/* Field 1: Your Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder-slate-600"
                  required
                />
              </div>

              {/* Field 2: Email */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder-slate-600"
                  required
                />
              </div>

              {/* Field 3: Message (labeled as Message/Massage) */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message:
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your project details or technical inquiry here..."
                  className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none placeholder-slate-600"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-cyan-400/20 text-sm tracking-wider uppercase"
                >
                  SUBMIT
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}