import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ShoppingCart, Lightbulb, Code, Palette } from 'lucide-react';
const Portfolio = () => {
  const projects = [{
    title: "E-Commerce Course Platform",
    description: "A comprehensive responsive e-commerce platform specifically designed for selling online courses. Features clean UI, smooth navigation, and seamless browsing/purchasing experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web Development",
    icon: <ShoppingCart className="w-6 h-6" />,
    status: "Completed",
    features: ["Responsive course catalog", "User-friendly checkout process", "Interactive course previews", "Modern, clean interface"]
  }, {
    title: "AI/ML Learning Projects",
    description: "Exploring machine learning algorithms and artificial intelligence concepts through hands-on projects and implementations.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    category: "AI/ML",
    icon: <Lightbulb className="w-6 h-6" />,
    status: "In Progress",
    features: ["Algorithm implementations", "Data preprocessing techniques", "Model training and evaluation", "Real-world problem solving"]
  }, {
    title: "Java Full-Stack Applications",
    description: "Building comprehensive Java-based applications with focus on scalable architecture and modern development practices.",
    technologies: ["Java", "Spring Framework", "Database Integration"],
    category: "Full-Stack Development",
    icon: <Code className="w-6 h-6" />,
    status: "Ongoing",
    features: ["RESTful API development", "Database integration", "Security implementation", "Clean architecture patterns"]
  }, {
    title: "Data Visualization Dashboards",
    description: "Creating interactive dashboards and data visualizations using Tableau to present complex data insights in an accessible format.",
    technologies: ["Tableau", "Data Analysis", "SQL", "Business Intelligence"],
    category: "Data Visualization",
    icon: <Palette className="w-6 h-6" />,
    status: "Ongoing",
    features: ["Interactive data exploration", "Custom chart designs", "Real-time data connections", "Business intelligence insights"]
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Ongoing':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-portfolio-gradient bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my technical skills and passion for creating impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className="group hover:shadow-portfolio-lg transition-all duration-500 hover:scale-[1.02] border-border/50 animate-fade-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-portfolio-gradient-soft rounded-lg group-hover:bg-portfolio-gradient group-hover:text-white transition-all duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border border-border/50">
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  {project.status === 'Completed' ? <>
                      <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </> : <Button variant="outline" size="sm" className="w-full border-muted-foreground/50 text-muted-foreground" disabled>
                      Work in Progress
                    </Button>}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Future Projects Section */}
        
      </div>
    </section>;
};
export default Portfolio;