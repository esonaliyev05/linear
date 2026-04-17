"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen  text-black antialiased font-sans">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20  border-slate-100 pb-12"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
            Get in touch
          </h1>
          <p className="text-slate-500 text-xl max-w-xl leading-relaxed">
            Have a project in mind? Looking for a partner in digital innovation? 
            Reach out and let's build something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-16"
          >
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Contact Info</h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-sm text-slate-400 mb-1">Send an email</p>
                  <p className="text-xl font-medium border-b border-transparent group-hover:border-black inline-block transition-all duration-300">
                    hello@infinitydigital.com
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-sm text-slate-400 mb-1">Give us a call</p>
                  <p className="text-xl font-medium border-b border-transparent group-hover:border-black inline-block transition-all duration-300">
                    +1 (234) 567 890
                  </p>
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Headquarters</h3>
              <p className="text-xl font-medium leading-relaxed">
                123 Innovation Drive,<br />
                Silicon Valley, CA 94025
              </p>
            </section>

            {/* Socials */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Social Ecosystem</h3>
              <div className="flex flex-wrap gap-8 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-blue-600 transition-colors underline underline-offset-8 decoration-slate-200">Instagram</a>
                <a href="#" className="hover:text-blue-600 transition-colors underline underline-offset-8 decoration-slate-200">LinkedIn</a>
                <a href="#" className="hover:text-blue-600 transition-colors underline underline-offset-8 decoration-slate-200">Twitter</a>
              </div>
            </section>
          </motion.div>

          {/* Right: Contact Form (8 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative border-b border-slate-200 focus-within:border-black transition-all duration-500 py-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-none outline-none py-1 text-xl placeholder:text-slate-200"
                  />
                </div>
                <div className="relative border-b border-slate-200 focus-within:border-black transition-all duration-500 py-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-none outline-none py-1 text-xl placeholder:text-slate-200"
                  />
                </div>
              </div>

              <div className="relative border-b border-slate-200 focus-within:border-black transition-all duration-500 py-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Website Development"
                  className="w-full bg-transparent border-none outline-none py-1 text-xl placeholder:text-slate-200"
                />
              </div>

              <div className="relative border-b border-slate-200 focus-within:border-black transition-all duration-500 py-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-transparent border-none outline-none py-1 text-xl resize-none placeholder:text-slate-200"
                />
              </div>

              <div className="flex justify-start md:justify-end pt-6">
                <button className="group flex items-center space-x-6 bg-black text-white px-12 py-6 rounded-full hover:bg-zinc-800 transition-all duration-300 active:scale-95 shadow-2xl shadow-black/10">
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Send Inquiry</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}