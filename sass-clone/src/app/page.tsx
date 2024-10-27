"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <span className="sr-only">EduTech Pro</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </Link>
        {/* Hamburger Menu for smaller screens */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
        {/* Menu with flex-col and gap on small screens */}
        <nav
          className={`sm:flex ${
            isMenuOpen
              ? "absolute top-0 left-[70%] flex flex-col gap-4 mt-4"
              : "hidden"
          } sm:gap-6`}
        >
          {["Features", "How It Works", "Pricing", "Contact"].map((item) => (
            <Link
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              key={item}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full h-screen md:h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48  ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empower Your Teaching with EduTech Pro
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The all-in-one platform designed to streamline your classroom
                  management and enhance student engagement.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full  md:h-screen	flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Product Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Interactive Lessons",
                  description: "Create engaging, multimedia-rich lessons",
                },
                {
                  title: "Automated Grading",
                  description: "Save time with AI-powered grading assistance",
                },
                {
                  title: "Progress Tracking",
                  description: "Monitor student progress in real-time",
                },
                {
                  title: "Communication Tools",
                  description: "Stay connected with students and parents",
                },
                {
                  title: "Resource Library",
                  description: "Access a vast library of educational resources",
                },
                {
                  title: "Customizable Reports",
                  description: "Generate insightful reports with ease",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full md:h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How Our Product Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Sign Up",
                  description:
                    "Create your account and set up your virtual classroom",
                },
                {
                  step: 2,
                  title: "Customize",
                  description:
                    "Tailor the platform to fit your teaching style and needs",
                },
                {
                  step: 3,
                  title: "Teach & Engage",
                  description:
                    "Deliver interactive lessons and track student progress",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full md:h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  features: [
                    "Interactive Lessons",
                    "Basic Grading",
                    "Student Profiles",
                  ],
                },
                {
                  name: "Pro",
                  price: "$19.99",
                  features: [
                    "All Basic features",
                    "Automated Grading",
                    "Advanced Analytics",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "All Pro features",
                    "Custom Integrations",
                    "Dedicated Support",
                  ],
                },
              ].map((plan, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full">Choose Plan</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full md:h-screenflex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Have questions or need assistance? Our team is here to help!
                </p>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@edutechpro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Education Lane, Learning City, 12345</span>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <textarea
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your Message"
                ></textarea>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 EduTech Pro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
