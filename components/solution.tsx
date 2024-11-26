import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Safari from "./ui/safari";

export const Solution = () => (
  <div className="w-full py-20 lg:py-40 max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
     <div className="space-y-4 text-center pb-10">
     <Badge>SOLUTION</Badge>
          {/* <p className="text-primary font-medium">SOLUTION</p> */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Teaching Made Easier with AI
          </h2>
        </div>
    <div className="container mx-auto">
      <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Something new!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Say goodbye to manual work and hello to efficiency, insights, and better results!
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>AI-Powered Quiz Creation</p>
                <p className="text-muted-foreground text-sm">
                Upload your PDF, and let our intelligent system generate quizzes instantly.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Class Performance Analytics</p>
                <p className="text-muted-foreground text-sm">
                Get a clear picture of how your class is performing as a whole.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Time-Saving Workflow</p>
                <p className="text-muted-foreground text-sm">
                Focus more on teaching while we handle the tedious tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <Safari
        url="m3nnoun.com"
        className="size-full"
        src="./mennoun.png"
      />
        </div>
      </div>
    </div>
  </div>
);