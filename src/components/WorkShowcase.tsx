
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Immersive UI Experience",
    description: "A cutting-edge interface with fluid animations and intuitive navigation",
    tags: ["Design", "Motion", "UX"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Product Ecosystem",
    description: "Seamless integration across multiple platforms and devices",
    tags: ["Development", "Strategy", "Systems"],
    image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Brand Evolution",
    description: "Transforming legacy brands into modern digital experiences",
    tags: ["Strategy", "Design", "Identity"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  }
];

const WorkShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-10 relative">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-sm font-medium text-gray-500 tracking-wide uppercase">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mt-2">
            Recent projects
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{projects[currentProject].title}</h3>
              <p className="text-gray-600">{projects[currentProject].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <AnimatedButton 
                className="mt-6"
                onClick={() => console.log(`View project ${projects[currentProject].id}`)}
              >
                View Project
              </AnimatedButton>
            </div>
            <motion.div
              className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="flex justify-between mt-8">
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-full bg-black text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextProject}
              className="p-3 rounded-full bg-black text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
