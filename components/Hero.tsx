import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-black mb-6 text-4xl font-bold">
          A better way to track your job application.
        </h1>
        <p className="text-accent-foreground mb-10 text-xl">
          Capture, organize, and manage your job search in one place.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="h-12 px-8 text-lg font-medium" asChild>
            <Link href={"/sign-up"}>
              Start for free
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Free forever, No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
