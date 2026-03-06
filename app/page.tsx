import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ImageTabs from "@/components/ImageTabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <Hero />
        <ImageTabs />
        <Features />
      </main>
    </div>
  );
}
