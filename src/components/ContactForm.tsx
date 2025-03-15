
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-10 relative">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-sm font-medium text-gray-500 tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mt-2">
            Let's start a conversation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg">
              Interested in working together? I'm always open to discussing product design work or partnership opportunities.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gray-50 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full"
              >
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                <p className="text-gray-600">Your message has been sent successfully.</p>
                <AnimatedButton 
                  className="mt-6" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </AnimatedButton>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <AnimatedButton 
                  type="submit" 
                  className={isSubmitting ? "opacity-75" : ""}
                  onClick={() => {}}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </AnimatedButton>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
