"use client";

import Link from 'next/link';
import { useState } from "react";

const teamMembers = [
  { name: "Karl Gustafsson", role: "CEO & Co-founder", image: "https://i.pravatar.cc/400?u=karl" },
  { name: "Jori Lallo", role: "CTO & Co-founder", image: "https://i.pravatar.cc/400?u=jori" },
  { name: "Tuomas Artman", role: "Engineer", image: "https://i.pravatar.cc/400?u=tuomas" },
  { name: "Cristine Cordon", role: "Product Designer", image: "https://i.pravatar.cc/400?u=cristine" },
  { name: "Alex Rivera", role: "Software Engineer", image: "https://i.pravatar.cc/400?u=alex" },
  { name: "Sam Chen", role: "Product Manager", image: "https://i.pravatar.cc/400?u=sam" },
  { name: "Priya Patel", role: "Marketing Lead", image: "https://i.pravatar.cc/400?u=priya" },
  { name: "Marcus Weber", role: "Backend Engineer", image: "https://i.pravatar.cc/400?u=marcus" },
];

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <section className="pt-28 pb-20 xm: mt-[65px] ">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-left mb-8">
            Building tools for the next<br />era of product development
          </h1>

          <p className="text-xl md:text-[20px] text-zinc-400 max-w-10xl text-left mb-16">
            AI is fundamentally changing how products get built.
            We are shaping what comes next.
          </p>

          {/* Video - 1220px ga cheklangan */}
          <div className="relative max-w-[1220px] mx-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <video
              src="https://static.linear.app/assets/careers/Linear-about-graded.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/10">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Erin — Product Marketing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20  h-[65vh] mt-[65px] border-zinc-800">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-semibold tracking-tighter leading-tight">
                A new species of<br />product tool
              </h2>
            </div>
            <div className="lg:col-span-7 text-zinc-400 text-start text-[17.5px] leading-relaxed space-y-6">
              <h3>
                Software development is at an inflection point. Artificial intelligence is
                fundamentally reshaping how products are built.


              </h3>

              <p> AI increases what teams can create, but it also raises the bar for clarity and coordination. At Linear, we are building the tools for this new era of product development. A purpose-built system where teams and agents operate together in a shared, structured environment.</p>

              <p>
                Founded in 2019, Linear has become the tool of choice for more than 25,000 companies (including OpenAI, Coinbase, and Ramp) to plan, build, and ship their products.

              </p>

              <p>
                Our team is distributed across North America and Europe, and we’re continuing to grow internationally. What unites us is relentless focus, fast execution, and a deep care for software craftsmanship.

              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20  h-[35vh] mt-[65px] border-zinc-800">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-semibold tracking-tighter leading-tight">
                Meet the team
                <br />behind Linear

              </h2>
            </div>
            <div className="lg:col-span-7 text-zinc-400 text-start text-[17.5px] leading-relaxed space-y-6">
              <h3>
                We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all makers at heart.
              </h3>

              <button>
                <Link href="/careers" >
                  We’re hiring →

                </Link>
              </button>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-[1220px]  mx-auto px-6">


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group bg-zinc-900  border-zinc-800 rounded-1xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-emerald-400 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}