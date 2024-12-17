import Card from "../components/Card";
import Logo from "../components/logo";

const Main = () => {
  return (
    <div>
      {/* header */}
      <div className="flex justify-between">
        <Logo />
      </div>

      {/* body */}
      <Card />
    </div>
  );
};

export default Main;
