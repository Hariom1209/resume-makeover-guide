
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
      
      // Header with name and contact info
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text("HARIOM KUMAR", 20, 25);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text("Email ID: mishrahariom1209@gmail.com", 20, 32);
      pdf.text("Mobile: +91-9798962474", 20, 37);
      pdf.text("LinkedIn: http://www.linkedin.com/in/hariom-kumar", 20, 42);
      
      // Objective Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("OBJECTIVE", 20, 55);
      
      // Add border for objective section
      pdf.rect(20, 48, 170, 25);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      const objectiveText = "Constantly seeking to apply my knowledge to learn something useful and keep challenging myself to be a better performer per the company's requirements. Good and quick learner, team player, loves to learn new things, flexible with different technologies.";
      const objectiveLines = pdf.splitTextToSize(objectiveText, 160);
      pdf.text(objectiveLines, 25, 60);
      
      // Skills Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("SKILLS", 20, 88);
      
      // Add border for skills section
      pdf.rect(20, 81, 170, 35);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("• Languages: C++, Java, SQL, Web technology, C, Python.", 25, 95);
      pdf.text("• Developer Tools: VS Code, GitHub, Online compiler", 25, 101);
      pdf.text("• Technologies/Frameworks: NodeJS, Express JS, Git, MongoDB", 25, 107);
      
      // Education Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("EDUCATION", 20, 130);
      
      // Add border for education section
      pdf.rect(20, 123, 170, 40);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("GALGOTIAS UNIVERSITY (2022-2025)", 25, 140);
      pdf.text("BCA– CGPA – 7.5", 25, 146);
      pdf.text("12 (Senior Secondary Examination) (2022)", 25, 152);
      pdf.text("10th (Secondary Examination) 2019", 25, 158);
      
      // Trainings or Certifications Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("TRAININGS OR CERTIFICATIONS", 20, 180);
      
      // Add border for certifications section
      pdf.rect(20, 173, 170, 35);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("• ORACLE Academy final exam completion in Database programming with SQL", 25, 185);
      pdf.text("• AWS (Academy Cloud Foundations) certificate", 25, 191);
      pdf.text("• 12 weeks of NPTEL (training and development) training & certification", 25, 197);
      pdf.text("• CISCO (Networking Academy) Cybersecurity course Certificate", 25, 203);
      
      // Projects Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("PROJECTS", 20, 220);
      
      // Add border for projects section
      pdf.rect(20, 213, 170, 25);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("• Book store management using web technology, MYSQL, Python.", 25, 227);
      pdf.text("• Email Spam Detection using Python, ML.", 25, 233);
      
      // Achievements Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("ACHIEVEMENTS", 20, 250);
      
      // Add border for achievements section
      pdf.rect(20, 243, 170, 35);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("• Received Certificate of Merit, secured 3rd position at District level in Talent Search", 25, 257);
      pdf.text("  Expedition from M B D College, Darbhanga, Bihar.", 27, 263);
      pdf.text("• Attended various webinars on college, etc.", 25, 269);
      pdf.text("• Solved many coding questions on various platforms.", 25, 275);
      
      // Address Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("ADDRESS", 20, 290);
      
      // Add border for address section
      pdf.rect(20, 283, 170, 20);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("• Permanent address: Darbhanga, Bihar, India.", 25, 297);
      pdf.text("• Current address: Greater Noida.", 25, 303);
      
      // Create filename with current date
      const currentDate = new Date().toISOString().split('T')[0];
      const filename = `Hariom_Kumar_Resume_${currentDate}.pdf`;
      
      // Save the PDF
      pdf.save(filename);
      
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
