// Portfolio | here 
const  Portfolio =()=> {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-6 mx-auto">
        <h1 className="text-xl font-semibold text-center text-gray-800 capitalize lg:text-2xl dark:text-white">
          Portfolio
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-300">
          Showcasing our top projects and collections.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
          <h2 className="mt-3 text-lg font-semibold text-gray-800 capitalize dark:text-white">
            Block of UI Kit Collections
          </h2>
          <p className="mt-1 text-sm tracking-wider text-blue-500 uppercase dark:text-blue-400">
            UI Kit
          </p>
          <div>
            <h2 className="mt-3 text-lg font-semibold text-gray-800 capitalize dark:text-white">
              Ton’s of Mobile Mockups
            </h2>
            <p className="mt-1 text-sm tracking-wider text-blue-500 uppercase dark:text-blue-400">
              Mockups
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
