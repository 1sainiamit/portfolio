import { Marquee } from "../shared/Marquee";
import { Button } from "../ui/button";

const TECH_STACK = [
  "Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "GraphQL", "Figma"
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FFF8E7] pt-20">
      
      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-noise opacity-60 mix-blend-multiply"></div>
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "32px 32px" }}></div>
      
      {/* Decorative Icons */}

      <div className="container relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        
        {/* Avatar Sticker */}
        <div className="mb-8 overflow-hidden rounded-full border-4 border-black bg-white neo-brutal-shadow h-32 w-32 sm:h-40 sm:w-40 flex items-center justify-center">
           {/* Placeholder for avatar image - using an emoji for now, user can replace */}
           <span className="text-6xl">👨‍💻</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-heading text-4xl font-black uppercase tracking-tighter min-[375px]:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-black">
          Amit Saini
        </h1>

        {/* Subtitle */}
        <div className="mb-10 text-lg font-bold min-[375px]:text-xl sm:text-2xl md:text-3xl">
          <span className="bg-secondary px-2 py-1 border-2 border-black rotate-[-2deg] inline-block">
            Software Developer
          </span>
          {" "}
          <span className="bg-primary px-2 py-1 border-2 border-black rotate-[2deg] inline-block mt-2 sm:mt-0 text-white">
            & UI Enthusiast
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-white text-lg h-14 px-6 border-2 border-black neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-primary transition-all rounded-md font-bold">
            <a href="#projects">
              View My Work
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black text-lg h-14 px-6 border-2 border-black neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-white transition-all rounded-md font-bold">
            <a href="/resume.pdf" download="Amit_Saini_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 w-full">
        <Marquee items={TECH_STACK} />
      </div>
    </section>
  );
}
