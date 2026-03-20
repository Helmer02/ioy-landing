import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Workflow from "@/components/Workflow";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black selection:bg-primary/30 selection:text-white">
      <CursorGlow />
      
      {/* Background Decorative Elements - Rentier Accent Style */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        
        {/* Subtle noise/texture if needed, but Rentier is very clean black */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Problems />
        <Solutions />
        <Products />
        <Workflow />
        <DashboardPreview />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
