import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export function ContactForm() {
  const [email, setEmail] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={20} />
          <span>info@officegate.com</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={20} />
          <span>+1 (555) 123-4567</span>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}