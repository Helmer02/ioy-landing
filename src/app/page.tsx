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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#121323] via-[#0B0B0F] to-[#05060A]">
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
    </main>
  );
}
