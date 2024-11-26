import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "How does the quiz creation process work?",
    answer:
      "Simply upload your PDF, and our AI will automatically extract relevant content to create a quiz. You can review and edit the quiz before finalizing it.",
  },
  {
    question: "Can I use the platform for subjects other than multiple-choice questions?",
    answer:
      "Yes! Our platform supports multiple-choice, true/false, short answer, and essay-style questions. You can customize the question types to fit your teaching needs.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Absolutely. We use state-of-the-art encryption to protect your files and analytics. Your data is safe with us and will never be shared without your consent.",
  },
  {
    question: "Can I track individual student performance?",
    answer:
      "Yes. Our platform provides detailed reports on each student's strengths and areas for improvement, allowing you to tailor your teaching strategies.",
  },
  {
    question: "Is there a limit to how many quizzes I can create?",
    answer:
      "The limit depends on your plan: Starter Plan allows up to 10 quizzes per month, while Pro and School Plans offer unlimited quizzes.",
  },
  {
    question: "Do you offer support if I encounter issues?",
    answer:
      "Of course! Our dedicated support team is available to assist you. Pro and School Plan users also get priority support for faster resolution.",
  },
  {
    question: "How does the School Plan work for institutions?",
    answer:
      "The School Plan allows multiple teachers to access the platform under a single account. It includes a school-wide dashboard for collaborative insights and management.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription anytime through your account settings. Your data will remain accessible until the end of your billing period.",
  },
];

export const FAQ = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Everything you need to know about our platform, answered here.
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Simplify your teaching workflow with our intelligent tools. Get answers to your questions below.
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Any questions? Reach out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
