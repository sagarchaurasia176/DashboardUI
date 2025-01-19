const ContactCode = {
  name: "Contact",
  code: `
  const ContactUs = () => {
  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style="filter\\: grayscale(0.9) contrast(1.2) opacity(0.6); border\\: 0;"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex items-center justify-center">
      <div class="lg\\:w-1/3 md\\:w-1/2 bg-white rounded-lg p-8 shadow-lg relative z-10">
        <h2 class="text-gray-900 text-2xl font-semibold mb-4">
          We'd love to hear from you!
        </h2>
        <p class="text-gray-600 mb-6">
          Feel free to share your feedback, thoughts, or questions. We're here
          to help!
        </p>
        <form action="#" method="POST">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full mt-1 px-3 py-2 bg-gray-100 rounded border
             border-gray-300 focus\\:ring-indigo-500 focus\\:border-indigo-500 text-gray-700 outline-none transition duration-200"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              class="w-full mt-1 px-3 py-2 bg-gray-100 rounded border border-gray-300 focus\\:ring-indigo-500 focus\\:border-indigo-500
             text-gray-700 outline-none transition duration-200 resize-none h-32"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded hover\\:bg-indigo-700 transition duration-200"
          >
            Submit Feedback
          </button>
        </form>
        <p class="mt-4 text-xs text-gray-500 text-center">
          Your feedback helps us improve and serve you better. Thank you!
        </p>
      </div>
    </div>
  </section>
  };
  export default ContactUs;
      `,

  description:
    "A user-friendly contact page that allows visitors to easily get in touch.",
};

export default ContactCode;
