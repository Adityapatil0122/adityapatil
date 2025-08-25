import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import adityaProfile from '@/assets/aditya-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-portfolio-gradient-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={adityaProfile}
                alt="Aditya Lotan Patil"
                className="w-48 h-48 rounded-full object-cover shadow-portfolio-lg border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-portfolio-gradient opacity-20"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hey, I'm <span className="bg-portfolio-gradient bg-clip-text text-transparent">Aditya</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
            Aspiring Java Full-Stack Developer | Software & Web Development Enthusiast
          </p>

          {/* Brief intro */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Final-year B.Tech CSE student passionate about creating efficient, scalable solutions 
            through modern web technologies and Java development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-portfolio-gradient hover:shadow-portfolio-glow transition-all duration-300 text-lg px-8 py-3"
              onClick={() => scrollToSection('#portfolio')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-3"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:adityalpatil2004@gmail.com"
              className="p-3 rounded-full bg-card shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-patil-497b3224b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-primary" />
            </a>
            <a
              href="https://github.com/Adityapatil0122"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-primary" />
            </a>
            <a
              href="tel:+919309009518"
              className="p-3 rounded-full bg-card shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone size={24} className="text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;