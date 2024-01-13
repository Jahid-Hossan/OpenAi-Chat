import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";

const App = () => {
  return (
    <div className="flex bg-[#17223b]">
      <div className="w-1/12 bg-[#26324c]  min-h-screen">
        navigation
      </div>

      <div className="w-full">
        <Nav></Nav>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;