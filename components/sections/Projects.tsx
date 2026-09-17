import { AnimatedSection } from "../shared/AnimatedSection";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { Github } from "../shared/Icons";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Devroad",
    description: "A premium platform for creators, developers, and designers to sell digital products, courses, and software seamlessly. Features include customized storefronts, subscriptions, and automated workflows.",
    image: "/devroad.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Razorpay"],
    liveUrl: "https://devroad-wheat.vercel.app/",
    githubUrl: "https://github.com/1sainiamit/devroad",
    featured: true,
  },
  {
    title: "ISH Organics",
    description: "A modern wellness brand platform offering functional herbal formulations and third-party manufacturing solutions. Built with premium design and seamless UX.",
    image: "/ishorganics.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    liveUrl: "https://ishorganics.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI Target Analyzer",
    description: "An AI-powered fitness projection engine that analyzes user metrics to provide realistic timeline predictions for weight management and bodybuilding goals.",
    image: "/target-analyzer.png",
    tags: ["Next.js", "AI", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://realistic-target-analyzer.vercel.app/",
    githubUrl: "#",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 relative inline-block">
            Selected Works
            <span className="absolute -bottom-4 left-0 w-full h-4 bg-primary border-2 border-black"></span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <AnimatedSection 
              key={project.title} 
              delay={index * 100}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <Card className="h-full flex flex-col border-4 border-black bg-white neo-brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all group overflow-hidden rounded-none">
                
                {/* Project Image */}
                <div className={`relative border-b-4 border-black ${project.featured ? 'h-[300px] md:h-[400px]' : 'h-[250px]'}`}>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-white border-2 border-black text-sm md:text-base font-black px-4 py-1 uppercase rounded-none">
                      Featured
                    </Badge>
                  )}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-black uppercase mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-lg font-medium mb-6 flex-grow border-l-4 border-secondary pl-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black text-white text-xs font-bold border-2 border-black">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Button asChild className="bg-secondary text-black hover:bg-secondary/90 border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button asChild variant="outline" className="bg-white text-black border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Source Code
                        </a>
                      </Button>
                    )}
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
