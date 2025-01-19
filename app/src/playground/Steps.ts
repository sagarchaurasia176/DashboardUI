const StepsCode = {
  name: "Steps",
  code: `
 const Steps = () => {
  <div>
    <section class="text-gray-100 bg-slate-800 body-font">
      <div class="container px-6 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full">
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">STEP 1</h2>
                <p class="leading-relaxed text-sm text-gray-100">Step description for step 1.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">STEP 2</h2>
                <p class="leading-relaxed text-sm text-gray-100">Step description for step 2.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">STEP 3</h2>
                <p class="leading-relaxed text-sm text-gray-100">Step description for step 3.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">STEP 4</h2>
                <p class="leading-relaxed text-sm text-gray-100">Step description for step 4.</p>
              </div>
            </div>
          <div class="flex relative">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2 class="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">FINISH</h2>
              <p class="leading-relaxed text-sm text-gray-100">Congratulations! You’ve completed the steps and are ready for new challenges.</p>
            </div>
          </div>
        </div>
        <div class="lg\\:w-3/5 md\\:w-1/2 object-cover object-center rounded-lg md\\:mt-0 mt-12">
          <img src="https://dummyimage.com/1200x500" alt="steps illustration" class="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  </div>
  };

  export default Steps;    
      `,

  description:
    "A clear and easy-to-follow steps section that outlines the process or journey for users to take in order to achieve a specific goal. ",
};

export default StepsCode;
