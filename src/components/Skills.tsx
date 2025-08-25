import { Card, CardContent } from '@/components/ui/card';
import { 
  Coffee, // Java
  Code, // Programming
  Globe, // Web Development
  Database, // SQL
  BarChart3, // Data Visualization
  Cpu, // AI/ML
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Development",
      icon: <Coffee className="w-8 h-8" />,
      skills: ["Core Java", "Advanced Java", "Java Full-Stack Development"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      category: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      category: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: ["SQL", "Database Design", "Data Management"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      category: "Data Visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Tableau", "Data Analysis", "Business Intelligence"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      category: "Emerging Technologies",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["AI/ML (Learning)", "Algorithm Design", "Problem Solving"],
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      category: "Software Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["Clean Code", "Version Control", "Testing"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & <span className="bg-portfolio-gradient bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-portfolio-lg transition-all duration-300 hover:scale-105 border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-center">
                      <span className="text-muted-foreground font-medium px-3 py-2 bg-background rounded-full text-sm border border-border/50 group-hover:border-primary/20 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center animate-fade-up">
          <Card className="max-w-4xl mx-auto border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Currently Learning & Expanding</h3>
              <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Next Goals</h4>
                  <p className="text-sm">Advanced Spring Framework, Microservices Architecture</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">AI/ML Journey</h4>
                  <p className="text-sm">Machine Learning Algorithms, Python for Data Science</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Cloud Technologies</h4>
                  <p className="text-sm">AWS, Docker, DevOps Practices</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;