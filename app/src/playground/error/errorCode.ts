const errorCode = {
    name: "Error",
    code: `
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Homepage
        </a>
      </div>
    </div>    
    `,
    description:
      "A custom-built button component. Get your own personalized button for webpages",
  };
  
  export default errorCode;
  