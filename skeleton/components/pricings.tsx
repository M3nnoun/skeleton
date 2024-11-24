import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing = () => (
  <div className="w-full py-20 max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col mx-auto">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
          Flexible Plans Designed for Teachers
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
          Choose the plan that fits your teaching needs and start saving time while enhancing student success.
          </p>
        </div>
        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 m-auto">
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                Starter Plan  
                </span>
              </CardTitle>
              <CardDescription>
              Ideal for individual teachers looking for quick quiz creation and essential analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$9.99</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>AI-powered quiz generation.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Up to 10 quizzes per month.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Basic class performance insights.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                Get Started with Starter <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full shadow-2xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                Pro Plan
                </span>
              </CardTitle>
              <CardDescription>
              Perfect for teachers who need advanced tools to analyze student performance and create personalized quizzes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$19.99</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Unlimited quiz creation.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Detailed class and individual student reports.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Export results and data to share with parents and colleagues.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Priority customer support.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  Sign up today <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                School Plan
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">custom pricing</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Access for multiple teachers under one account.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>School-wide analytics dashboard.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Custom integration and onboarding support.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Dedicated account manager.</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                Contact Us for School Plan <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);