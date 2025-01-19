const errorCode = {
  name: "Error",
  code: `
  const Error = () => {
  <div class="flex flex-col items-center justify-center h-96 bg-gray-100">
    <h1 class="text-9xl font-bold text-blue-500">404</h1>
    <h2 class="text-3xl font-semibold text-gray-800 mt-4">  
      Page Not Found
    </h2>
    <p class="text-gray-600 mt-2 text-center max-w-md">
      The page you're looking for doesn't exist or has been moved. Please check
      the URL or go back to the homepage.
    </p>
    <div class="mt-6">
      <a
        href="/"
        class="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Back to Homepage
      </a>
    </div>
  </div>
  };
  export default Error;
      `,
  description:
    "A user-friendly 404 error page that informs visitors that the page they are looking for could not be found. It features a clear message,",
};

export default errorCode;
