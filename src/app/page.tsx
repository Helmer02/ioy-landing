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
      <div className="pointer-events-none fixed -left-32 top-8 h-[28rem] w-[28rem] rounded-full bg-primary/14 blur-[140px]" />
      <div className="pointer-events-none fixed -right-36 top-24 h-[24rem] w-[24rem] rounded-full bg-secondary/10 blur-[150px]" />
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
