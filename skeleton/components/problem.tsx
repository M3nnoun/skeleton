import { Brain, Zap, Shield } from 'lucide-react'
import { Badge } from "@/components/ui/badge";


export default function Problem() {
  return (
    <section className="container mx-auto  py-8 max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="space-y-16">
        <div className="space-y-4 text-center">
        <Badge>PROBLEM</Badge>
          {/* <p className="text-primary font-medium">PROBLEM</p> */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The Challenges Teachers Face Today
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Time-Consuming Quiz Creation</h3>
            <p className="text-muted-foreground">
            Writing quizzes manually takes hours, cutting into valuable teaching time.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Limited Insights</h3>
            <p className="text-muted-foreground">
            Assessing class and individual student performance is often unclear and requires tedious manual work.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Difficulty Personalizing Learning</h3>
            <p className="text-muted-foreground">
            Teachers struggle to identify and address the unique needs of each student.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}