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
      
      // Set font and add header
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.text("Hariom Kumar", 105, 20, { align: 'center' });
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text("Mayur Vihar (110091)", 20, 30);
      pdf.text("mishrahariom1209@gmail.com", 105, 30, { align: 'center' });
      pdf.text("+91 - 9798962474", 190, 30, { align: 'right' });
      pdf.text("http://www.linkedin.com/in/hariom-kumar-718426294", 105, 35, { align: 'center' });
      
      // Professional Summary
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("Professional Summary", 20, 50);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      const summaryText = "Detail-oriented Computer Science undergraduate with hands-on experience in developing and implementing projects. Completed several online projects and internships, showcasing a strong aptitude for problem-solving and a passion for staying updated with emerging technologies.";
      const summaryLines = pdf.splitTextToSize(summaryText, 170);
      pdf.text(summaryLines, 20, 58);
      
      // Education
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("Education", 20, 80);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("BCA Computer Science & Engineering", 20, 88);
      pdf.text("2022-2025", 190, 88, { align: 'right' });
      pdf.text("GALGOTIAS UNIVERSITY (CGPA-7.5/10)", 20, 94);
      pdf.text("12th (PCM)", 20, 100);
      pdf.text("M.B.D College, Darbhanga, Bihar (61%)", 20, 106);
      pdf.text("10th BIHAR SCHOOL EDUCATION BOARD", 20, 112);
      pdf.text("V Mishra High School, Darbhanga, Bihar (50%)", 20, 118);
      
      // Technical Skills
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("Technical Skills", 20, 135);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("• Programming Languages - C, C++, Java, Python", 20, 143);
      pdf.text("• Web Technologies - HTML, CSS, JavaScript, PHP, MySQL", 20, 149);
      pdf.text("• Other - DBMS, Microsoft Excel, MS Word, PowerPoint, etc.", 20, 155);
      pdf.text("• Specialization - Developer", 20, 161);
      
      // Internships
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("Internships", 20, 175);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("Web Development Intern, OCTANET Service Pvt Ltd.", 20, 183);
      pdf.text("July-Aug", 190, 183, { align: 'right' });
      pdf.text("Worked on the front-end development.", 25, 189);
      pdf.text("AICTE EDUSILKS Virtual Internship", 20, 195);
      pdf.text("July-Sep", 190, 195, { align: 'right' });
      pdf.text("Engaged in skill Development Workshop (Colours).", 25, 201);
      pdf.text("OCTANET SERVICES PVT LTD", 20, 207);
      pdf.text("Oct-Nov", 190, 207, { align: 'right' });
      pdf.text("worked on the full-stack developer.", 25, 213);
      
      // Projects
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("Projects", 20, 230);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("Email Spam Detection", 20, 238);
      pdf.text("As part of the BCA Research Project", 25, 244);
      pdf.text("Bookstore management", 20, 250);
      pdf.text("Project to create skills using HTML, CSS, JavaScript, PHP, MySQL", 25, 256);
      
      // Training and Certificates
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("Training and Certificates", 20, 270);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("12 weeks NPTEL (training and development) training & certification", 20, 278);
      pdf.text("Jan-Apr2024", 175, 278);
      pdf.text("AWS (Academy Cloud Foundations) certificate", 20, 284);
      pdf.text("Apr2023", 180, 284);
      pdf.text("ORACLE Academy final exam completion in Database programming with SQL", 20, 290);
      pdf.text("Jan 2024", 180, 290);
      pdf.text("CISCO (Networking Academy) Cybersecurity course Certificate", 20, 296);
      pdf.text("Feb 2024", 180, 296);
      
      // Create filename with current date
      const currentDate = new Date().toISOString().split('T')[0];
      const filename = `Hariom_Kumar_Resume_${currentDate}.pdf`;
      
      // Save the PDF
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
