import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Users, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TaskFlow - Project Management SaaS",
      description: "A comprehensive project management platform with real-time collaboration, built for teams of all sizes. Features include kanban boards, time tracking, and advanced reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Socket.io", "AWS"],
      github: "#",
      live: "#",
      stats: { users: "10K+", stars: 245, status: "Production" },
      featured: true
    },
    {
      title: "EcoShop - Sustainable E-commerce",
      description: "An eco-friendly e-commerce platform promoting sustainable products with carbon footprint tracking and green shipping options.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
      github: "#",
      live: "#",
      stats: { users: "5K+", stars: 156, status: "Live" },
      featured: true
    },
    {
      title: "WeatherScope - Smart Weather Dashboard",
      description: "A beautiful weather dashboard with AI-powered forecasts, interactive maps, and personalized weather insights for outdoor enthusiasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "PWA"],
      github: "#",
      live: "#",
      stats: { users: "2K+", stars: 89, status: "Beta" },
      featured: false
    },
    {
      title: "CodeReview Assistant",
      description: "An AI-powered code review tool that helps developers identify bugs, security issues, and performance improvements automatically.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      technologies: ["Python", "OpenAI API", "Docker", "FastAPI", "React"],
      github: "#",
      live: "#",
      stats: { users: "1K+", stars: 134, status: "Alpha" },
      featured: false
    },
    {
      title: "HealthTracker Mobile App",
      description: "A cross-platform mobile application for tracking health metrics, workouts, and nutrition with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Expo", "Redux", "Chart.js"],
      github: "#",
      live: "#",
      stats: { users: "3K+", stars: 78, status: "Live" },
      featured: false
    },
    {
      title: "DevPortfolio Generator",
      description: "An open-source tool that automatically generates beautiful developer portfolios from GitHub profiles and resume data.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "GitHub API", "Netlify", "Tailwind CSS"],
      github: "#",
      live: "#",
      stats: { users: "500+", stars: 67, status: "Open Source" },
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work that demonstrates my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">🌟 Featured Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.stats.status === 'Production' ? 'default' : 'secondary'}>
                      {project.stats.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Project Stats */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.stats.users}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Activity className="h-4 w-4" />
                      <span>{project.stats.status}</span>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">🚀 More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.stats.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
