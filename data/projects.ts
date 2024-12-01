// src/data/projects.ts
export interface Project {
  id: number;
  image: string;
  title: string;
  location?: string;
  duration?: string;
  rates?: number;
}

export const projects: Project[] = [
  { id: 1, image: "/proj1.jpg", title: "Project Alpha", location: "New York", duration: "6 months", rates: 15000 },
  { id: 2, image: "/blog6.jpg", title: "Project Beta", location: "London", duration: "3 months", rates: 12000 },
  { id: 3, image: "/proj3.jpg", title: "Project Gamma", location: "Berlin", duration: "1 year", rates: 25000 },
  { id: 4, image: "/proj3.jpg", title: "Project Delta", location: "Paris", duration: "9 months", rates: 20000 },
  { id: 5, image: "/proj4.jpg", title: "Project Epsilon", location: "Dubai", duration: "8 months", rates: 18000 },
  { id: 6, image: "/home.jpg", title: "Project Zeta", location: "Tokyo", duration: "2 years", rates: 40000 },
];
