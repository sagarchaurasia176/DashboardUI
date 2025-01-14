const Steps = () => (
  <div>
    <section className="text-gray-100 bg-slate-800 body-font">
      <div className="container px-6 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          {['STEP 1', 'STEP 2', 'STEP 3', 'STEP 4'].map((step, index) => (
            <div key={index} className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d={index === 0 ? "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" : index === 1 ? "M22 12h-4l-3 9L9 3l-3 9H2" : index === 2 ? "M12 22V8M5 12H2a10 10 0 0020 0h-3" : "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"} />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">{step}</h2>
                <p className="leading-relaxed text-sm text-gray-100">Step description for {step.toLowerCase()}.</p>
              </div>
            </div>
          ))}
          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">FINISH</h2>
              <p className="leading-relaxed text-sm text-gray-100">Congratulations! You’ve completed the steps and are ready for new challenges.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
          <img src="https://dummyimage.com/1200x500" alt="steps illustration" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  </div>
);

export default Steps;
