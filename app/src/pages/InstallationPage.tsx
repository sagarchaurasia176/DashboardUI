import Sidebar from "../components/Sidebar";

const InstallationPage = () => {
  return (
    <div className="flex gap-20 bg-black h-screen text-white">
      <Sidebar />
      <div className="mt-32">
        <h2 className="font-sans text-2xl font-extrabold py-2">Installation</h2>
        <div className="px-6 py-2">
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
