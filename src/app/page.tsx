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
    <main className="relative min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <CursorGlow />
      
      {/* Background Decorative Elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(101,102,130,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
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
