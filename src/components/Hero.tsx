
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Add your actual resume PDF URL here
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Hariom_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Status Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium border border-green-200">
              🟢 Open to Work - Available for Work
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Hariom Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Aspiring Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building exceptional digital experiences.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2025</div>
              <div className="text-muted-foreground">Graduation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">BCA</div>
              <div className="text-muted-foreground">Degree</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">QSpiders</div>
              <div className="text-muted-foreground">Internship</div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a href="https://linkedin.com/in/hariom-kumar-718426294" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a href="mailto:mishrahariom1209@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button onClick={scrollToAbout} size="lg" className="animate-bounce hover:animate-none">
              <ArrowDown className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button onClick={handleDownloadResume} variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
