const portfolioCode = {
    name: "Portfolio",
    code: `
     const projects = [
    {
      title: "UI Kit Collections",
      category: "UI Kit",
      description: "Explore a variety of UI kits designed for modern interfaces.",
    },
    {
      title: "Mobile Mockups",
      category: "Mockups",
      description: "High-quality mockups for mobile app designs.",
    },
    {
      title: "Web Templates",
      category: "Web Design",
      description: "Beautiful and responsive web templates for your projects.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Portfolio
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Showcasing our top projects and collections.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {project.category}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    `,
    description:
      "A custom-built button component. Get your own personalized button for webpages",
  };
  
  export default portfolioCode;
  