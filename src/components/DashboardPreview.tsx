"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-32 relative overflow-hidden" id="preview">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-6 text-sm font-medium text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              Preview Exclusivo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Veja o <span className="text-gradient">IOY Agenda</span> funcionando
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A melhor maneira de entender o poder de uma interface premium é vê-la em ação.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Dashboard Application Window */}
          <div className="rounded-2xl border border-white/10 glass-card overflow-hidden shadow-[0_0_60px_rgba(108,59,255,0.15)] group relative">
            
            {/* Browser Top Bar */}
            <div className="bg-[#0B0B0F]/80 border-b border-white/10 p-3 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 max-w-md mx-auto h-6 bg-white/5 rounded-md border border-white/5 flex items-center px-3">
                <span className="text-[10px] text-muted font-mono">app.ioy.com.br/dashboard</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="aspect-video bg-[#05060A] relative flex items-center justify-center overflow-hidden">
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500 backdrop-blur-[2px]">
                <button className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Fake UI Layers */}
              <div className="absolute inset-0 p-6 flex gap-6 opacity-60">
                {/* Sidebar */}
                <div className="w-48 hidden md:flex flex-col gap-4 border-r border-white/10 pr-6">
                  <div className="w-full h-8 bg-white/10 rounded mb-4" />
                  <div className="w-3/4 h-3 bg-white/5 rounded" />
                  <div className="w-1/2 h-3 bg-white/5 rounded" />
                  <div className="w-5/6 h-3 bg-white/5 rounded" />
                  <div className="w-full h-3 bg-white/10 rounded mt-8" />
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="w-40 h-6 bg-white/10 rounded" />
                    <div className="w-10 h-10 bg-white/10 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gradient-to-br from-primary/20 to-transparent border border-white/5 rounded-xl" />
                    <div className="h-24 bg-gradient-to-br from-secondary/20 to-transparent border border-white/5 rounded-xl" />
                    <div className="h-24 bg-white/5 border border-white/5 rounded-xl" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl mt-4" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
