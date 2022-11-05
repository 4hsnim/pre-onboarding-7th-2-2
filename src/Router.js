import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdManagePage from "./components/pages/AdManagePage";
import DashBoardPage from "./components/pages/DashBoardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/admanage" element={<AdManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
