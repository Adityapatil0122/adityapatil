import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import adityaProfile from '@/assets/aditya-profile-new.jpg';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-portfolio-gradient-hero relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-portfolio-gradient opacity-5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] [background-size:50px_50px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-up">
          {/* Enhanced Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-portfolio-gradient rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative">
                <img src={adityaProfile} alt="Aditya Lotan Patil - Java Full-Stack Developer" className="w-56 h-56 rounded-full object-cover shadow-portfolio-lg border-4 border-card/20 backdrop-blur-sm" />
                <div className="absolute inset-0 rounded-full bg-portfolio-gradient opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                
                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 bg-card/10 backdrop-blur-md rounded-full p-2 border border-border/20">
                  <div className="w-4 h-4 bg-portfolio-gradient rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              <span className="text-foreground">Hey, I'm</span>
              <br />
              <span className="bg-portfolio-gradient bg-clip-text text-transparent drop-shadow-lg">Aditya </span>
            </h1>

            {/* Glowing tagline */}
            <div className="relative">
              <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto">
                Aspiring <span className="text-primary font-semibold">Java Full-Stack Developer</span>
                <br />
                <span className="text-accent">Software & Web Development Enthusiast</span>
              </p>
            </div>

            {/* Brief intro with better styling */}
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed font-light">
              Final-year B.Tech CSE student passionate about creating 
              <span className="text-foreground font-medium"> efficient, scalable solutions</span> through 
              modern web technologies and Java development.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="group bg-portfolio-gradient hover:shadow-portfolio-glow transition-all duration-500 text-lg px-10 py-4 font-semibold border-0 hover:scale-105" onClick={() => scrollToSection('#portfolio')}>
              <span className="mr-2">View My Work</span>
              <div className="w-2 h-2 bg-white/80 rounded-full group-hover:animate-pulse"></div>
            </Button>
            <Button variant="outline" size="lg" className="group border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-portfolio-glow-accent backdrop-blur-sm transition-all duration-500 text-lg px-10 py-4 font-semibold hover:scale-105" onClick={() => scrollToSection('#contact')}>
              Get In Touch
              <div className="ml-2 w-0 group-hover:w-2 h-2 bg-primary rounded-full transition-all duration-300"></div>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8">
            {[{
            href: "mailto:adityalpatil2004@gmail.com",
            icon: Mail,
            label: "Email",
            color: "text-red-400"
          }, {
            href: "https://linkedin.com/in/aditya-patil-497b3224b",
            icon: Linkedin,
            label: "LinkedIn",
            color: "text-blue-400"
          }, {
            href: "https://github.com/Adityapatil0122",
            icon: Github,
            label: "GitHub",
            color: "text-gray-300"
          }, {
            href: "tel:+919309009518",
            icon: Phone,
            label: "Phone",
            color: "text-green-400"
          }].map(({
            href,
            icon: Icon,
            label,
            color
          }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group relative p-4 rounded-2xl bg-card/5 backdrop-blur-md border border-border/20 hover:border-primary/50 shadow-portfolio hover:shadow-portfolio-lg transition-all duration-500 hover:scale-110" aria-label={label}>
                <Icon size={28} className={`${color} group-hover:scale-110 transition-all duration-300`} />
                <div className="absolute inset-0 rounded-2xl bg-portfolio-gradient opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              </a>)}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="group cursor-pointer" onClick={() => scrollToSection('#about')}>
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm bg-card/5 group-hover:border-primary transition-all duration-300">
            <div className="w-1.5 h-4 bg-portfolio-gradient rounded-full mt-3 animate-pulse group-hover:h-5 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;