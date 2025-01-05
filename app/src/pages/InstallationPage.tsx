import Sidebar from "../components/Sidebar";

const InstallationPage = () => {
  return (
    <div className="flex gap-20 bg-black text-white">
      <Sidebar />
      <div>
        <h2 className="font-sans text-2xl font-extrabold pt-10 py-3">
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
  );
};

export default InstallationPage;
