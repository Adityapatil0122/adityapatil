import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Code2, 
  Database, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development Services",
      description: "Building responsive, user-friendly websites with modern technologies and clean, maintainable code.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Cross-browser Compatibility",
        "Performance Optimization"
      ],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Java Software Development",
      description: "Developing efficient, scalable Java-based applications with focus on clean architecture and best practices.",
      features: [
        "Object-Oriented Programming",
        "Clean Code Principles",
        "Scalable Architecture",
        "Testing & Documentation"
      ],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Backend Solutions",
      description: "SQL-based data management and backend solutions designed for reliability and performance.",
      features: [
        "Database Design",
        "Query Optimization",
        "Data Security",
        "API Development"
      ],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Visualization & Analytics",
      description: "Presenting data insights through interactive dashboards and compelling visual representations using Tableau.",
      features: [
        "Interactive Dashboards",
        "Data Analysis",
        "Business Intelligence",
        "Custom Reporting"
      ],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-portfolio-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services tailored to bring your digital ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-portfolio-lg transition-all duration-500 hover:scale-[1.02] border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="group/btn border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={scrollToContact}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center animate-fade-up">
          <Card className="max-w-4xl mx-auto bg-portfolio-gradient-soft border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to transform your ideas into powerful, scalable solutions. 
                I'm here to help you navigate the technical challenges and deliver results that exceed expectations.
              </p>
              <Button 
                size="lg" 
                className="bg-portfolio-gradient hover:shadow-portfolio-glow transition-all duration-300"
                onClick={scrollToContact}
              >
                Let's Work Together
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;