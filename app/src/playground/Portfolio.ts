const portfolioCode = {
  name: "Portfolio",
  code: `
  const Portfolio = () => {
    <section class="bg-white dark\\:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-bold text-center text-gray-800 capitalize lg\\:text-3xl dark\\:text-white">
          Portfolio
        </h1>
        <p class="mt-4 text-center text-gray-600 dark\\:text-gray-300">
          Showcasing our top projects and collections.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 md\\:grid-cols-2 xl\\:grid-cols-3">
            <div
              class="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark\\:bg-gray-800 dark\\:border-gray-700 hover\\:shadow-lg transform hover\\:scale-105 transition duration-300"
            >
              <h2 class="text-lg font-semibold text-gray-800 dark\\:text-white">
                UI Kit Collections
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark\\:text-gray-400 uppercase tracking-wide">
                UI Kit
              </p>
              <p class="mt-4 text-gray-600 dark\\:text-gray-300">
                Explore a variety of UI kits designed for modern interfaces.
              </p>
            </div>
            <div
              class="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark\\:bg-gray-800 dark\\:border-gray-700 hover\\:shadow-lg transform hover\\:scale-105 transition duration-300"
            >
              <h2 class="text-lg font-semibold text-gray-800 dark\\:text-white">
                Mobile Mockups
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark\\:text-gray-400 uppercase tracking-wide">
               Mockups
              </p>
              <p class="mt-4 text-gray-600 dark\\:text-gray-300">
                High-quality mockups for mobile app designs.
              </p>
            </div>
            <div
              class="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark\\:bg-gray-800 dark\\:border-gray-700 hover\\:shadow-lg transform hover\\:scale-105 transition duration-300"
            >
              <h2 class="text-lg font-semibold text-gray-800 dark\\:text-white">
                Web Templates
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark\\:text-gray-400 uppercase tracking-wide">
                Web Design
              </p>
              <p class="mt-4 text-gray-600 dark\\:text-gray-300">
               Beautiful and responsive web templates for your projects.
              </p>
            </div>
        </div>
      </div>
    </section>
};

export default Portfolio;
                `,
  description:
    "A captivating and visually appealing hero section that serves as the first point of interaction for visitors",
};

export default portfolioCode;
