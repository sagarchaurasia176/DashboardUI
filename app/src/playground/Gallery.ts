const GalleryCode = {
  name: "Gallery",
  code: `
  const Gallery = () => {
      <section class="text-gray-800 body-font bg-gray-100">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm\\:text-4xl text-3xl font-bold title-font mb-4 text-blue-600">
              Explore Our Exclusive Gallery
            </h1>
            <p class="lg\\:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Dive into a collection of inspiring moments captured just for you. .
            </p>
          </div>
          <div class="flex flex-wrap gap-8">
            <div class="lg\\:w-1/3 sm\\:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="Gallery item\\: Shooting Stars"
                  class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/600x360"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover\\:opacity-95 transition-opacity duration-300 rounded-lg">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    INSPIRATION
                  </h2>
                  <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed text-gray-600">
                    Discover the beauty of celestial wonders through this
                    mesmerizing capture.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg\\:w-1/3 sm\\:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="Gallery item\\: The Catalyzer"
                  class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/601x361"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover\\:opacity-95 transition-opacity duration-300 rounded-lg">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    CREATIVITY
                  </h2>
                  <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed text-gray-600">
                    A spark of innovation captured in a moment of brilliance.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg\\:w-1/3 sm\\:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="Gallery item: The 400 Blows"
                  class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/603x363"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover\\:opacity-95 transition-opacity duration-300 rounded-lg">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    ADVENTURE
                  </h2>
                  <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-relaxed text-gray-600">
                    Embark on a journey that challenges boundaries and explores
                    the unknown.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg\\:w-1/3 sm\\:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="Gallery item\\: Neptune"
                  class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/602x362"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover\\:opacity-95 transition-opacity duration-300 rounded-lg">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    MYSTERY
                  </h2>
                  <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p class="leading-relaxed text-gray-600">
                    Dive deep into the enigmatic beauty of the vast seas.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg\\:w-1/3 sm\\:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="Gallery item\\: Holden Caulfield"
                  class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/605x365"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover\\:opacity-95 transition-opacity duration-300 rounded-lg">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    REFLECTION
                  </h2>
                  <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p class="leading-relaxed text-gray-600">
                    A moment to reflect, captured in the hustle of life.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg\\:w-1/3 sm\\:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="Gallery item\\: Alper Kamu"
                  class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/606x366"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover\\:opacity-95 transition-opacity duration-300 rounded-lg">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    SERENITY
                  </h2>
                  <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-relaxed text-gray-600">
                    Find tranquility amidst the chaos of everyday life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    };

    export default Gallery;
      `,

  description:
    "A visually striking gallery section designed to display a curated collection of images...",
};

export default GalleryCode;
