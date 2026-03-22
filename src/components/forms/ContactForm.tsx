'use client'

import { Mail, Phone } from 'lucide-react';

export default function ContactForm() {
    const handleSubmit = async (formData: React.FormEvent<HTMLFormElement>) => {
    formData.preventDefault();
    const formElements = formData.currentTarget.elements as any;
    const data = {
      name: formElements.name.value,
      email: formElements.email.value,
      message: formElements.message.value,
    };

    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    // Handle success/error
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="prose lg:prose-xl">
        <p>Want a photo booth for your big day or team party? Drop us a note with the date, location, and guest count. We'll take it from there.</p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">Send Us a Message <Mail className="w-6 h-6" /></h2>
      
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" className="input" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="input" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" className="textarea" rows={4}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="flex-1 text-gray-600">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <p><Mail className="inline-block w-4 h-4 mr-1" />Email: <a href="mailto:info@emeraldcityphotobooth.com">info@emeraldcityphotobooth.com</a></p>
          <p><Phone className="inline-block w-4 h-4 mr-1" />Phone: <a href="tel:+18646253580">(864) 625-3580</a></p>
        </div>
      </div>


    </div>
  )
}