import React from "react";

const ContactSec = () => {
  return (
    <div>
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 py-24  mx-auto flex flex-wrap">
          <div className="lg:w-1/2 md:w-full bg-indigo-600 text-white p-10 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6 text-indigo-100">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you!
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="w-6 h-6 mr-2 bg-indigo-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM8 2h8a4 4 0 014 4v12a4 4 0 01-4 4H8a4 4 0 01-4-4V6a4 4 0 014-4z"></path>
                    <path d="M8 10h8M8 14h4"></path>
                  </svg>
                </span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <span className="w-6 h-6 mr-2 bg-indigo-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 10-8 0m6 8v4H10v-4m6-8V6a4 4 0 10-8 0v2"></path>
                  </svg>
                </span>
                support@example.com
              </p>
              <p className="flex items-center">
                <span className="w-6 h-6 mr-2 bg-indigo-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 10h3m3-1H9m-6 7h6m6-9v6m0-6v6m-3 3H9m-6 0h6"></path>
                  </svg>
                </span>
                123 Example St, City, Country
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-full mt-10 lg:mt-0 p-10 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSec;
