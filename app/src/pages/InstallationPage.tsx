import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const InstallationPage = () => {
  return (
    <section>
      <Navbar />
      <div className="flex gap-20 bg-black text-white">
        <Sidebar />
        <div>
          <h2 className="font-sans text-2xl font-extrabold py-3">
            Installation
          </h2>
          <div className="px-2 py-2 text-lg">
            <ul className="list-disc">
              <li>Configure Tailwind</li>
              <li>Install react icons</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationPage;
