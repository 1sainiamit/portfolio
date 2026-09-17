import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../ui/badge";

const EXPERIENCES = [
  {
    company: "Aaizel International Technologies Pvt Ltd",
    role: "Associate Software Developer",
    date: "October 2025 - Present",
    description: [
      "Architected a high-performance frontend for an enterprise deepfake detection platform using Next.js 16, React 19, and Tailwind CSS v4.",
      "Developed a comprehensive UI design system integrating Radix UI primitives and Framer Motion, ensuring maximum accessibility and modular component architecture.",
      "Managed complex application state with Redux Toolkit and built interactive data visualization dashboards using Recharts to render live Socket.io data streams."
    ]
  },
  {
    company: "Aaizel International Technologies Pvt Ltd",
    role: "Software Developer Intern",
    date: "April 2025 - September 2025",
    description: [
      "Engineered a real-time IoT pipeline using Node.js and MQTT to process sensor telemetry, broadcasting live updates to a React dashboard via WebSockets.",
      "Developed a spatial routing microservice utilizing Python, Flask, and PostGIS/pgRouting to dynamically compute emergency response paths on Leaflet maps.",
      "Implemented an anomaly detection engine evaluating incoming telemetry against dynamic PostgreSQL thresholds to trigger automated Twilio SMS alerts."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <AnimatedSection>
          <div className="flex justify-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase bg-accent px-6 py-2 border-4 border-black inline-block transform rotate-2">
              Experience
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative border-l-8 border-black ml-4 md:ml-8">
          {EXPERIENCES.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="mb-12 relative pl-8 md:pl-12 group">

                {/* Timeline Dot */}
                <div className="absolute w-8 h-8 bg-black rounded-full -left-[20px] top-0 border-4 border-white group-hover:scale-125 group-hover:bg-primary transition-all duration-300"></div>

                {/* Content Card */}
                <div className="bg-white border-4 border-black p-6 md:p-8 neo-brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-black uppercase">{exp.company}</h3>
                      <p className="text-xl font-bold text-gray-700 mt-1">{exp.role}</p>
                    </div>
                    <Badge className="bg-secondary text-black border-2 border-black font-black px-4 py-1 text-sm md:text-base uppercase rounded-none self-start md:self-auto neo-brutal-shadow-sm">
                      {exp.date}
                    </Badge>
                  </div>

                  <ul className="space-y-3 font-medium text-lg">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-primary font-black text-xl">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
