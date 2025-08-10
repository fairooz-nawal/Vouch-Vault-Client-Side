import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-red-600 focus:ring-red-600 sm:text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-red-600 focus:ring-red-600 sm:text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-red-600 focus:ring-red-600 sm:text-sm"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent 
                           bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm 
                           hover:bg-red-700 focus:outline-none focus:ring-2 
                           focus:ring-red-600 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-red-600 text-white rounded-lg p-8">
            <h3 className="text-3xl font-extrabold mb-4">Get in touch</h3>
            <p className="mb-6 text-indigo-100">
              We’d love to hear from you. Whether you have a question about features, 
              pricing, or anything else — our team is ready to answer all your questions.
            </p>
            <ul className="space-y-4 bg-white p-4 rounded-lg text-black">
              <li>
                📍 <span className="ml-2">123 Main Street, New York, NY</span>
              </li>
              <li>
                📞 <span className="ml-2">(123) 456-7890</span>
              </li>
              <li>
                📧 <span className="ml-2">support@example.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}


