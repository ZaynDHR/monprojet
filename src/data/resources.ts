export interface Resource {
  id: number
  title: string
  url: string
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  description: string
}

export const categories = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Databases",
  "Tools",
  "Career"
]

export const difficultyColors: Record<string, string> = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444"
}

export const categoryColors: Record<string, string> = {
  Frontend: "#3b82f6",
  Backend: "#8b5cf6",
  DevOps: "#f97316",
  Databases: "#06b6d4",
  Tools: "#64748b",
  Career: "#ec4899"
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    category: "Frontend",
    difficulty: "Beginner",
    description: "Comprehensive documentation for HTML, CSS, and JavaScript. Essential reading for web developers."
  },
  {
    id: 2,
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    category: "Frontend",
    difficulty: "Beginner",
    description: "Interactive coding tutorials covering full-stack web development. completely free with certifications."
  },
  {
    id: 3,
    title: "React Documentation",
    url: "https://react.dev",
    category: "Frontend",
    difficulty: "Intermediate",
    description: "Official React documentation with interactive examples and best practices for building UI."
  },
  {
    id: 4,
    title: "TypeScript Handbook",
    url: "https://www.typescriptlang.org/docs/handbook",
    category: "Frontend",
    difficulty: "Intermediate",
    description: "Complete guide to TypeScript, from basic types to advanced utility types and patterns."
  },
  {
    id: 5,
    title: "Node.js Documentation",
    url: "https://nodejs.org/en/docs",
    category: "Backend",
    difficulty: "Intermediate",
    description: "Official Node.js documentation covering API reference, guides, and best practices."
  },
  {
    id: 6,
    title: "Express.js Guide",
    url: "https://expressjs.com/en/guide/routing.html",
    category: "Backend",
    difficulty: "Intermediate",
    description: "Fast, unopinionated web framework for Node.js. Learn routing, middleware, and REST APIs."
  },
  {
    id: 7,
    title: "Docker Documentation",
    url: "https://docs.docker.com",
    category: "DevOps",
    difficulty: "Intermediate",
    description: "Official Docker docs for containerization, images, volumes, and deployment workflows."
  },
  {
    id: 8,
    title: "Kubernetes Basics",
    url: "https://kubernetes.io/docs/tutorials/kubernetes-basics",
    category: "DevOps",
    difficulty: "Advanced",
    description: "Learn Kubernetes fundamentals: pods, deployments, services, and scaling containerized applications."
  },
  {
    id: 9,
    title: "PostgreSQL Tutorial",
    url: "https://www.postgresql.org/docs/tutorial",
    category: "Databases",
    difficulty: "Beginner",
    description: "Official PostgreSQL tutorial covering SQL basics, queries, and database administration."
  },
  {
    id: 10,
    title: "MongoDB University",
    url: "https://learn.mongodb.com",
    category: "Databases",
    difficulty: "Beginner",
    description: "Free courses on MongoDB, NoSQL databases, and modern data architecture patterns."
  },
  {
    id: 11,
    title: "Git Documentation",
    url: "https://git-scm.com/doc",
    category: "Tools",
    difficulty: "Beginner",
    description: "Complete Git version control reference, from basic commands to advanced branching strategies."
  },
  {
    id: 12,
    title: "VS Code Tips",
    url: "https://code.visualstudio.com/docs",
    category: "Tools",
    difficulty: "Beginner",
    description: "Master Visual Studio Code with official docs, shortcuts, extensions, and productivity tips."
  },
  {
    id: 13,
    title: "System Design Primer",
    url: "https://github.com/donnemartin/system-design-primer",
    category: "Career",
    difficulty: "Advanced",
    description: "Learn to design scalable systems. Covers load balancing, caching, databases, and interview prep."
  },
  {
    id: 14,
    title: "JavaScript.info",
    url: "https://javascript.info",
    category: "Frontend",
    difficulty: "Intermediate",
    description: "Modern JavaScript tutorial from fundamentals to advanced topics like closures and prototypes."
  },
  {
    id: 15,
    title: "Tailwind CSS Docs",
    url: "https://tailwindcss.com/docs",
    category: "Frontend",
    difficulty: "Beginner",
    description: "Utility-first CSS framework documentation with examples for rapid UI development."
  }
]
