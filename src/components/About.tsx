import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Brain, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B.Tech Computer Science Engineering (2022-2026) at College of Engineering, Ambi"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Focus Area",
      description: "Java Full-Stack Development with hands-on web development experience"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Exploring",
      description: "AI/ML technologies and emerging IT trends for future innovation"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal",
      description: "Building scalable, efficient solutions that make a real-world impact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-portfolio-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-gradient mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year B.Tech Computer Science Engineering student at College of Engineering, Ambi, 
                with an insatiable passion for software development and emerging technologies. My journey in 
                the tech world has been driven by curiosity and the desire to create meaningful solutions.
              </p>
              <p>
                Currently focusing on Java full-stack development, I've gained hands-on experience in web 
                development technologies including HTML, CSS, JavaScript, and SQL. I believe in writing 
                clean, efficient code that not only works but scales beautifully.
              </p>
              <p>
                Beyond coding, I'm exploring the fascinating world of AI/ML and staying updated with the 
                latest IT trends. My goal is to contribute to innovative projects that make a real difference 
                in people's lives while continuously learning and growing as a developer.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-up">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-portfolio-lg transition-all duration-300 hover:scale-105 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-portfolio-gradient-soft rounded-lg group-hover:bg-portfolio-gradient group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;