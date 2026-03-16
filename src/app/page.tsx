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
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 grid-overlay" />
      <div className="pointer-events-none fixed -left-24 top-28 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
      <div className="pointer-events-none fixed -right-24 bottom-20 h-72 w-72 rounded-full bg-secondary/20 blur-[110px]" />
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
