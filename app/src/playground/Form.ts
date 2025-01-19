const formCode = {
  name: "Form",
  code: `
    const Form = () => {
    <div class="max-w-md mx-auto mt-12 font-sans">
      <h2 class="text-2xl font-bold mb-4">Form</h2>
      <form>
        <div class="mb-4">
            <label class="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus\\:outline-none focus\\:ring focus\\:ring-blue-200"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus\\:outline-none focus\\:ring focus\\:ring-blue-200"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-700">Message</label>
          <textarea
            name="message"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus\\:outline-none focus\\:ring focus\\:ring-blue-200"
            placeholder="Message..."
            rows="4"
            required
          ></textarea>
        </div>
        <div class="flex justify-center ">
        
        <button
        type="submit"
        class="px-5 py-2 bg-blue-500 text-white rounded-lg hover\\:bg-blue-600 focus\\:outline-none focus\\:ring focus\\:ring-blue-300"
        >
        Submit
        </button>
        </div>
      </form>
    </div>
  };
  
  export default Form;
    `,
  description:
    "A reusable and customizable form component designed to capture user input efficiently.",
};

export default formCode;
