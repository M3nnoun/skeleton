import { MoveRight, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { HeroVideoDialogSection } from "./HeroVideoDialog";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="container max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center gap-8 py-16 sm:py-20 lg:py-32 xl:py-40 text-center">
          {/* Launch Article Button */}
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-2 sm:gap-4"
            >
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-semibold">
            Effortless Quiz Creation & Student Performance Insights
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
            Upload your PDF, let us handle the rest! Save time and empower your teaching with AI-driven quiz creation and performance analysis.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/demo" // Update this to the desired URL
              className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium leading-6 text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 gap-2 sm:gap-4"
            >
              <Zap className="w-4 h-4" />
              Get Started for Free
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 sm:gap-4"
            >
              Start free with Google <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <HeroVideoDialogSection />
      </div>
    </div>
  );
};
