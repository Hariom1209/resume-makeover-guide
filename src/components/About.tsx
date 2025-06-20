
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, passion, and what drives me to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
              alt="Profile"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate developer with over 5 years of experience in creating 
                  web applications that solve real-world problems. My journey started with 
                  curiosity about how websites work, and it has evolved into a love for 
                  crafting seamless user experiences.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good book with a cup of coffee.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
