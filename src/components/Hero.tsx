
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from 'jspdf';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm', 
        format: 'a4'
      });
      
      // Set font and add content
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text("HARIOM KUMAR", 20, 30);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(14);
      pdf.text("Aspiring Software Engineer", 20, 45);
      
      pdf.setFontSize(12);
      pdf.text("Contact Information:", 20, 65);
      pdf.text("Email: mishrahariom1209@gmail.com", 20, 75);
      pdf.text("Phone: +91 9798962474", 20, 85);
      pdf.text("LinkedIn: linkedin.com/in/hariom-kumar-718426294", 20, 95);
      
      pdf.text("Education:", 20, 115);
      pdf.text("Bachelor of Computer Applications (BCA)", 20, 125);
      pdf.text("Galgotias University - 2025", 20, 135);
      
      pdf.text("Current Experience:", 20, 155);
      pdf.text("Internship at QSpiders", 20, 165);
      
      pdf.text("Technical Skills:", 20, 185);
      pdf.text("Programming Languages: Java (85%), Python (80%), C++ (75%), C (70%)", 20, 195);
      pdf.text("Web Technologies: JavaScript (80%), HTML/CSS (90%), PHP (75%), MySQL (70%)", 20, 205);
      pdf.text("Other Tools: Microsoft Excel (85%), PowerPoint (80%), Word (85%)", 20, 215);
      
      pdf.text("Projects:", 20, 235);
      pdf.text("1. Book Store Management System", 20, 245);
      pdf.text("   - Built using PHP, HTML/CSS, and MySQL", 25, 255);
      pdf.text("   - Comprehensive web-based management system for book inventory", 25, 265);
      
      pdf.text("2. Email Spam Detection", 20, 280);
      pdf.text("   - Python-based application using NLTK and machine learning", 25, 290);
      pdf.text("   - Intelligent email classification system", 25, 300);
      
      // Create blob and download link
      const pdfBlob = pdf.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Hariom_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log('PDF downloaded successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/aafc0657-a90e-41c0-802e-f5ea91b31bfc.png"
              alt="Hariom Kumar"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-primary/20"
            />
          </div>

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
