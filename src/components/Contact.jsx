import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Match with .env variable names
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debugging (check if values are loaded)
    console.log("serviceId:", serviceId);
    console.log("templateId:", templateId);
    console.log("publicKey:", publicKey);

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-12"
    >
      <div className="w-full max-w-6xl bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Contact Info */}
          <div className="bg-gray-900 p-10 space-y-6">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "saadparekh3@gmail.com",
                link: "mailto:saadparekh3@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+92 319 3077899",
                link: "tel:+923193077899",
              },
              { icon: MapPin, title: "Location", value: "Karachi, Pakistan" },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "linkedin.com/in/saad-parekh-847a06292",
                link: "https://www.linkedin.com/in/saad-parekh-847a06292/",
              },
              {
                icon: Github,
                title: "GitHub",
                value: "github.com/saadparekh",
                link: "https://github.com/saadparekh",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <item.icon className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-10 bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6 relative pb-3 after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2">
              Send a Message
            </h2>

            <form onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="name" // ✅ Match EmailJS template {{name}}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email" // ✅ Match EmailJS template {{email}}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message" // ✅ Match EmailJS template {{message}}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transform transition text-white shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
