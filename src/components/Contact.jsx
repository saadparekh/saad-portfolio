import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      () => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white px-4 py-12"
    >
      <motion.div
        className="w-full max-w-5xl bg-gray-900/90 rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600/80 p-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h1>
          <p className="text-sm sm:text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            className="bg-gray-900 p-6 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Mail, title: "Email", value: "saadparekh3@gmail.com", link: "mailto:saadparekh3@gmail.com" },
              { icon: Phone, title: "Phone", value: "+92 319 3077899", link: "tel:+923193077899" },
              { icon: MapPin, title: "Location", value: "Karachi, Pakistan" },
              { icon: Linkedin, title: "LinkedIn", value: "linkedin.com/in/saad-parekh-847a06292", link: "https://www.linkedin.com/in/saad-parekh-847a06292/" },
              { icon: Github, title: "GitHub", value: "github.com/saadparekh", link: "https://github.com/saadparekh" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <item.icon className="w-5 h-5 text-blue-400" />
                <div>
                  <h3 className="text-md font-medium">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-6 bg-gray-800/90"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 relative pb-2 after:block after:w-14 after:h-1 after:bg-blue-400 after:mt-2">
              Send a Message
            </h2>

            <form onSubmit={sendEmail} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 transition text-sm"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 transition text-sm"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 transition text-sm"
                required
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white shadow-md text-sm sm:text-base"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
