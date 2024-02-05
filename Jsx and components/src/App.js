import { Fragment } from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const App = () => {
  return (
    <div className="product">
      <Name />
      <Price />
      <Description />
      <Image />
    </div>
  );
};

export default App;
