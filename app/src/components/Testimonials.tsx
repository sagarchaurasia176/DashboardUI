import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    content: "This dashboard solution has transformed how we manage our data. Incredibly intuitive and powerful!",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "The best analytics dashboard I've ever used. It's helped us make better decisions faster.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "CTO",
    company: "DataFlow",
    content: "Outstanding customization options and real-time updates. A game-changer for our team.",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  // Add more testimonials as needed
];


// Test
const Testimonials = ()=>{

  return (
    <div className="w-full py-24 min-h-screen bg-gradient-to-b from-zinc-950 via-slate-900 to-zinc-950 text-zinc-400">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-2xl text-gray-400">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="mt-16 relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",

              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[450px] flex-shrink-0 rounded-xl shadow-xl p-10 bg-white/5 backdrop-blur-lg"
              >
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-6">
                    <div className="text-xl font-medium text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-lg text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-lg text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


export default Testimonials