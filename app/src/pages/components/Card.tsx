import ComponentShowcase from "../../components/ComponentShowcase";
import Sidebar from "../../components/Sidebar";
import CardCodeSnippet from "../../playground/card/cardCodeSnippet";

const Card = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={CardCodeSnippet.code}
        name={CardCodeSnippet.name}
        description={CardCodeSnippet.description}
      />
    </div>
  );
};

export default Card;
