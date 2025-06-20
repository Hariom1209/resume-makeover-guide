
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <category.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-muted-foreground text-center">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
