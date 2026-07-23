import { testimonials } from "@/data/testimonials";


export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-16 px-4 text-white">
        <h2 className="text-4xl font-bold text-center my-3">Our Client Reviews</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#0f141d] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between relative"
          >
            {/* Quote Icon */}
            <div className="text-3xl font-serif text-slate-400 mb-4">“</div>

            {/* Testimonial Text */}
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {item.quote}
            </p>

            {/* Author Details */}
            <div className="flex items-center gap-4">
              <img
                src={item.author.avatar}
                alt={item.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white text-base">
                  {item.author.name}
                </h4>
                <p className="text-xs text-slate-400">{item.author.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}