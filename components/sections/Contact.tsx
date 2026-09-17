"use client";

import { AnimatedSection } from "../shared/AnimatedSection";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Copy, Check } from "lucide-react";
import { XIcon, Linkedin, Github } from "../shared/Icons";
import { useState, useTransition } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "amitsaini.sde@gmail.com";
  
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleAction(formData: FormData) {
    setStatus(null);
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.error) {
        setStatus({ success: false, message: result.error });
      } else if (result.success) {
        setStatus({ success: true, message: "Message sent successfully! 🚀" });
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) form.reset();
      }
    });
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-6">
              Let's <span className="text-white bg-black px-4 py-1 inline-block transform -rotate-2">Work</span> Together
            </h2>
            <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto">
              Got a project in mind or just want to say hi? Drop me a message below.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Form */}
          <AnimatedSection delay={100}>
            <form id="contact-form" className="bg-secondary p-8 border-4 border-black neo-brutal-shadow space-y-6" action={handleAction}>
              <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">Send a Message</h3>

              {status && (
                <div className={`p-4 border-4 border-black font-bold uppercase ${status.success ? 'bg-accent text-black' : 'bg-black text-white'}`}>
                  {status.message}
                </div>
              )}

              {/* Honeypot field for bot protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-xl font-bold uppercase block">Name</label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="h-14 text-lg bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-x-[2px] focus:-translate-y-[2px] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xl font-bold uppercase block">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="h-14 text-lg bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-x-[2px] focus:-translate-y-[2px] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xl font-bold uppercase block">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="min-h-[150px] text-lg bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-x-[2px] focus:-translate-y-[2px] transition-all resize-none"
                />
              </div>

              <Button disabled={isPending} type="submit" className="w-full h-16 text-2xl font-black uppercase bg-primary text-white border-4 border-black neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-none mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                {isPending ? "Sending..." : "Shoot Message 🚀"}
              </Button>
            </form>
          </AnimatedSection>

          {/* Right Column: Contact Info & Socials */}
          <AnimatedSection delay={200} className="space-y-12">

            {/* Email Copy Chip */}
            <div>
              <h3 className="text-2xl font-black uppercase mb-4">Direct Email</h3>
              <div
                onClick={handleCopy}
                className="inline-flex items-center gap-4 bg-white border-4 border-black px-6 py-4 cursor-pointer neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group"
              >
                <span className="text-xl md:text-2xl font-bold">{email}</span>
                <div className="bg-primary p-2 border-2 border-black group-hover:bg-accent transition-colors">
                  {copied ? <Check className="h-6 w-6 text-white" /> : <Copy className="h-6 w-6 text-white" />}
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-2xl font-black uppercase mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a
                  href="https://www.linkedin.com/in/sainiamit01/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white neo-brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-[#0077b5] hover:text-white transition-all"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://twitter.com/isainiamit" target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white neo-brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-[#333] hover:text-white transition-all"
                >
                  <XIcon className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/1sainiamit"
                  className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white neo-brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-black hover:text-white transition-all"
                >
                  <Github className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Location block */}
            <div className="bg-accent p-8 border-4 border-black inline-block -rotate-2 neo-brutal-shadow mt-8">
              <h3 className="text-2xl font-black uppercase mb-2">Location</h3>
              <p className="text-xl font-bold">Planet Earth 🌍</p>
              <p className="text-lg font-bold mt-2">(Available for remote work)</p>
            </div>

          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
