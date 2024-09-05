import { Route, Routes } from "react-router-dom";
import Main from "./main";
import Descripton from "./Descripton";

export default function App() {
  return (
    <div className="App m-10">
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/description" Component={Descripton} />
      </Routes>
    </div>
  );
}
