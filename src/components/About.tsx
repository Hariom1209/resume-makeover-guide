import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    "Recent BCA graduate from Galgotias University (2025)",
    "Currently interning with QSpiders",
    "Strong foundation in multiple programming languages",
    "Passionate about web development and software engineering"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to building innovative solutions and constantly expanding my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/lovable-uploads/aafc0657-a90e-41c0-802e-f5ea91b31bfc.png"
              alt="Hariom Kumar"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Education & Background</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Recent graduate from Galgotias University with a Bachelor of Computer Applications (BCA) in 2025. 
                  Currently honing my skills through an intensive internship with QSpiders, where I'm diving deep 
                  into practical software development.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Technical Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My passion lies in software engineering and web development. I have built a strong technical 
                  foundation across multiple programming languages and frameworks, with hands-on experience in 
                  both frontend and backend development. I'm committed to continuous learning and staying current 
                  with emerging technologies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">2025</div>
                    <div className="text-sm text-muted-foreground">Graduation Year</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">QSpiders</div>
                    <div className="text-sm text-muted-foreground">Current Internship</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Quick Facts</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Graduation Year</h4>
                <p className="text-2xl font-bold text-primary">2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Current Focus</h4>
                <p className="text-lg text-primary">Software Engineering</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Internship</h4>
                <p className="text-lg text-primary">QSpiders</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Specialization</h4>
                <p className="text-lg text-primary">Web Development</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Background Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
