'use client';

import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaClock, 
  FaPaperPlane,
  FaMicrochip
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   
    const formData = new FormData(e.currentTarget);
    const contactData = Object.fromEntries(formData.entries());

    console.log("Submitting Data:", contactData);

    try {
    
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Server Response:', data);
        setSubmitted(true);
        toast.success('Form submitted successfully')
      } else {
      // Handle error response safely without referencing undefined variables
      const errorData = await res.json().catch(() => null);
      console.error('Failed to send message:', errorData || res.statusText);
    }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    
    }
  };

  return (
    <main className="bg-[#080B10] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/50 px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let’s Build the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Automation & Engineering
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a custom R&D requirement, robotics project, or factory automation inquiry? Reach out to our engineering team directly.
          </p>
        </div>

        {/* MAIN CONTENT: FORM + OFFICE INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT CARDS & OFFICE DETAILS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Card */}
            <div className="bg-[#0F141C] border border-slate-800/90 p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <FaMicrochip className="text-cyan-400" /> Direct Assistance
              </h3>
              
              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Email Us</p>
                    <a href="mailto:info@ulterior.com.bd" className="font-medium hover:text-cyan-400 transition-colors">
                      info@ulterior.com.bd
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Call / WhatsApp</p>
                    <p className="font-medium">+880 1818-988959</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Working Hours</p>
                    <p className="font-medium">Saturday - Thursday | 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location Cards */}
            <div className="bg-[#0F141C] border border-slate-800/90 p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" /> Main Engineering Base
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Chattogram Headquarter</h4>
                  <p>4th Floor, K.B. Plaza, Chatteshwari Road,</p>
                  <p>Chittagong, Bangladesh-4203</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: QUERY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-[#111622] border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-cyan-400/20 text-cyan-400 border border-cyan-400/40 rounded-full flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Your query has been submitted successfully. Our engineering team will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-cyan-400 hover:underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Us A Message</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Fill out the technical inquiry form below for project estimations or support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Engr. Tanvir Ahmed"
                      className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder-slate-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+880 1700-000000"
                      className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder-slate-600"
                    />
                  </div>

                  {/* Type of Service / Inquiry */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      name="serviceType"
                      defaultValue="Industrial Automation"
                      className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Industrial Automation">Industrial Automation</option>
                      <option value="Robotics">Robotics Solution</option>
                      <option value="Embedded Hardware">Embedded Systems / PCB</option>
                      <option value="Artificial Intelligence">AI Vision Inspection</option>
                      <option value="Other Query">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Project Specs / Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your technical requirements or system issues..."
                    className="w-full bg-[#080B10] border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none placeholder-slate-600"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-cyan-400/20 text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center cursor-pointer gap-2 disabled:opacity-50"
                >
                  <FaPaperPlane /> {loading ? 'Sending...' : 'Send Query'}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}

export default ContactUs;