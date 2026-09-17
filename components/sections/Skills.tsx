import { AnimatedSection } from "../shared/AnimatedSection";
import { Card, CardContent } from "../ui/card";
import { Code2, Database, Layout, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Layout className="h-8 w-8 mb-4" />,
    color: "bg-primary",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand","Figma", "GSAP", "Three.js", "React Leaflet", "OpenLayers", "WCAG"],
  },
  {
    title: "Backend",
    icon: <Database className="h-8 w-8 mb-4" />,
    color: "bg-secondary",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "Socket.io", "MQTT", "GraphQL"],
  },
  {
    title: "Integrations & APIs",
    icon: <Code2 className="h-8 w-8 mb-4" />,
    color: "bg-accent",
    skills: ["Stripe", "Razorpay", "Webhooks", "REST APIs", "SEO", "Networking", "Postman"],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="h-8 w-8 mb-4" />,
    color: "bg-black text-white",
    skills: ["Git", "GitHub Actions", "CI/CD", "Docker", "Linux","ngrok", "Vercel", "Lighthouse"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex justify-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase inline-block relative">
              Tech Stack
              <div className="absolute -bottom-4 left-0 w-full h-4 bg-secondary border-2 border-black -skew-x-12"></div>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100}>
              <Card className="h-full border-4 border-black bg-white neo-brutal-shadow overflow-hidden">
                {/* Category Header */}
                <div className={`${category.color} p-6 border-b-4 border-black flex items-center justify-between`}>
                  <h3 className="text-3xl font-black uppercase">{category.title}</h3>
                  {category.icon}
                </div>
                
                {/* Skills Grid */}
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center justify-center p-3 border-2 border-black rounded bg-white text-center font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
