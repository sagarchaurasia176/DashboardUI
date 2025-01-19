const TestCode = {
  name: "Testimonials",
  code: `
  const Testimonials = () => {
  <div>
    <section class="text-gray-600 bg-slate-50 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm\\:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p class="lg\\:w-2/3 mx-auto leading-relaxed text-base">
            Meet our talented team of professionals who bring dedication,
            expertise, and passion to their work.
          </p>
        </div>
        <div class="grid gap-4 grid-cols-1 md\\:grid-cols-2 lg\\:grid-cols-3">
          <div class="p-4">
            <div class="h-full flex items-center border border-gray-200 p-6 rounded-lg hover\\:shadow-lg transition-shadow duration-300">
              <img
                alt="Holden Caulfield"
                class="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Holden Caulfield
                </h2>
                <p class="text-gray-500" aria-label="UI Designer">
                  UI Designer
                </p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="h-full flex items-center border border-gray-200 p-6 rounded-lg hover\\:shadow-lg transition-shadow duration-300">
              <img
                alt="Henry Letham"
                class="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4"
                src="https://dummyimage.com/84x84"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Henry Letham
                </h2>
                <p class="text-gray-500" aria-label="CTO">
                  CTO
                </p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="h-full flex items-center border border-gray-200 p-6 rounded-lg hover\\:shadow-lg transition-shadow duration-300">
              <img
                alt="Oskar Blinde"
                class="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4"
                src="https://dummyimage.com/88x88"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Oskar Blinde
                </h2>
                <p class="text-gray-500" aria-label="Founder">
                  Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
};

export default Testimonials;   
      `,
  description:
    "A persuasive and trust-building testimonials section that showcases positive feedback from satisfied customers, clients, or users. ",
};

export default TestCode;
