import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { AnimatedSection } from "../shared/AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-24 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 inline-block">
            <span className="bg-primary px-4 py-2 border-2 border-black text-white transform -rotate-2 inline-block">
              About Me
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Bio & Skills */}
          <AnimatedSection delay={100} className="space-y-8">
            <div className="text-xl md:text-2xl font-bold leading-relaxed space-y-6">
              <p>
                Hi, I'm Amit. I build digital experiences that are bold, fast, and accessible. 
                I believe in writing clean code and designing interfaces that leave a lasting impression.
              </p>
              <p>
                When I'm not pushing pixels or squashing bugs, you can find me exploring new tech stacks,
                contributing to open-source, or drinking way too much coffee.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase mb-4 border-b-4 border-black pb-2 inline-block">Core Focus</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <Badge className="bg-primary text-white border-2 border-black neo-brutal-shadow-sm text-base px-3 py-1 font-bold">Full-Stack Development</Badge>
                <Badge className="bg-secondary text-black border-2 border-black neo-brutal-shadow-sm text-base px-3 py-1 font-bold">Backend Architecture</Badge>
                <Badge className="bg-accent text-black border-2 border-black neo-brutal-shadow-sm text-base px-3 py-1 font-bold">API Integrations</Badge>
                <Badge className="bg-black text-white border-2 border-black neo-brutal-shadow-sm text-base px-3 py-1 font-bold">Interactive UIs</Badge>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Stats & Currently */}
          <AnimatedSection delay={200} className="space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-secondary border-2 border-black neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl md:text-6xl font-black mb-2">1.5<span className="text-4xl">+</span></div>
                  <div className="text-lg font-bold uppercase">Years Exp.</div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-2 border-black neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl md:text-6xl font-black mb-2">10<span className="text-4xl">+</span></div>
                  <div className="text-lg font-bold uppercase">Technologies</div>
                </CardContent>
              </Card>

              <Card className="col-span-2 bg-primary text-white border-2 border-black neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl md:text-6xl font-black mb-2">24<span className="text-4xl">/7</span></div>
                  <div className="text-lg font-bold uppercase">Problem Solver</div>
                </CardContent>
              </Card>
            </div>

            {/* Currently Block */}
            <Card className="bg-white border-2 border-black neo-brutal-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-black"></span>
                  </span>
                  Currently
                </h3>
                <p className="font-bold text-lg">
                  Building awesome web applications and learning Go on the weekends. Open to new opportunities!
                </p>
              </CardContent>
            </Card>

            {/* Habits/Hobbies Block */}
            <Card className="bg-white border-2 border-black neo-brutal-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                  <span className="text-2xl">⚡</span> Off-Screen Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-white border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm px-3 py-1 font-bold">⚽ Football</Badge>
                  <Badge className="bg-secondary text-black border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm px-3 py-1 font-bold">🏸 Badminton</Badge>
                  <Badge className="bg-accent text-black border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm px-3 py-1 font-bold">🏋️‍♂️ Weight Lifting</Badge>
                  <Badge className="bg-black text-white border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm px-3 py-1 font-bold">🏃‍♂️ Running</Badge>
                  <Badge className="bg-white text-black border-2 border-black neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm px-3 py-1 font-bold">🎧 Spotify</Badge>
                </div>
              </CardContent>
            </Card>

          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
