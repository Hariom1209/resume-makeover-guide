
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead development of enterprise SaaS applications serving 100K+ users. Architected microservices infrastructure and mentored a team of 5 developers.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led migration to cloud infrastructure reducing costs by 30%",
        "Implemented CI/CD pipeline improving deployment speed by 60%",
        "Mentored 5 junior developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple web applications from concept to deployment. Worked closely with product and design teams to deliver user-centric solutions.",
      achievements: [
        "Built 3 major product features from scratch",
        "Reduced API response times by 50% through optimization",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with design team to improve UX metrics by 25%"
      ],
      technologies: ["React", "Python", "Django", "Redis", "MongoDB", "GCP"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Developed responsive web applications for various clients across different industries. Focused on creating pixel-perfect, accessible user interfaces.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved website performance scores by average of 35%",
        "Implemented accessibility standards (WCAG 2.1 AA)",
        "Built reusable component library used across projects"
      ],
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Figma", "Adobe XD"]
    },
    {
      title: "Junior Web Developer",
      company: "Creative Studios Inc",
      location: "New York, NY",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey building websites and learning modern web development practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Successfully completed 20+ website projects",
        "Learned and implemented modern JavaScript frameworks",
        "Contributed to company's internal tool development",
        "Participated in code reviews and team knowledge sharing"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at each organization.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={exp.type === 'Full-time' ? 'default' : 'secondary'}>
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
