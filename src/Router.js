import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdManagePage from "./pages/AdManagePage";
import DashBoardPage from "./pages/DashBoardPage";

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
