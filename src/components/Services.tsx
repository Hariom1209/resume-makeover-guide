
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, BarChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Experienced in building web-based applications like the Book Store Management System. Proficient in creating responsive, user-friendly interfaces with modern web technologies.",
      icon: Globe,
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      features: [
        "Responsive Design",
        "Database Integration",
        "User Interface Development",
        "System Architecture"
      ]
    },
    {
      title: "Python Data Applications",
      description: "Skilled in developing Python-based applications with focus on data processing and machine learning, including projects like Email Spam Detection using NLTK and ML algorithms.",
      icon: BarChart,
      technologies: ["Python", "NLTK", "Machine Learning", "Data Processing"],
      features: [
        "Machine Learning Models",
        "Data Analysis",
        "Algorithm Implementation",
        "Text Processing"
      ]
    },
    {
      title: "Database Design & Management",
      description: "Proficient in designing and managing databases for web applications, ensuring efficient data storage and retrieval systems.",
      icon: Database,
      technologies: ["MySQL", "Database Design", "SQL", "Data Modeling"],
      features: [
        "Database Architecture",
        "Query Optimization",
        "Data Security",
        "Performance Tuning"
      ]
    },
    {
      title: "Software Development",
      description: "Strong foundation in multiple programming languages with experience in building efficient, scalable software solutions.",
      icon: Code,
      technologies: ["Java", "Python", "C++", "C"],
      features: [
        "Algorithm Design",
        "Code Optimization",
        "Problem Solving",
        "Software Architecture"
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Can Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging my skills to deliver quality solutions for web and software development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
