import Link from "next/link";
import { XIcon, Instagram, Pinterest, Linkedin, Github } from "../shared/Icons";

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-black bg-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            sainiamit
          </Link>
          <p className="mt-2 text-sm font-black bg-secondary px-2 border-2 border-black uppercase tracking-wider">
            Execute. Deploy. Scale.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase">
          <Link href="#about" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">About</Link>
          <Link href="#projects" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">Projects</Link>
          <Link href="#experience" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">Experience</Link>
          <Link href="#contact" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">Contact</Link>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="font-bold text-black mb-4 md:mb-0 text-sm">
            © {new Date().getFullYear()} Amit Saini. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://x.com/isainiamit" target="_blank" rel="noreferrer" aria-label="X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-primary transition-all"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/_sainiamit" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-secondary transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://in.pinterest.com/isainiamit/" target="_blank" rel="noreferrer" aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-accent transition-all"
            >
              <Pinterest className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sainiamit01/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-[#0077b5] hover:text-white transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/1sainiamit" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-[#333] hover:text-white transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
