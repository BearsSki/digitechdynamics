import Section from "./Section";
import Heading from "./Heading";
import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import "./Contact.css"; // Import the CSS file for animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send form data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <Section id="contact" className="py-16">
      <div className="container">
        <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">{"Contact Us"}</Title>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto animated-bg p-8 rounded-[2.4375rem] shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-white bg-black focus:text-white focus:placeholder-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-white bg-black focus:text-white focus:placeholder-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-white bg-black focus:text-white focus:placeholder-white"
              required
            />
          </div>
          <button type="submit" className="relative w-full px-4 py-2 rounded text-black btn-animated-bg">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;