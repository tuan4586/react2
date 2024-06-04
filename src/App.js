import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import CreateProfile from "./pages/CreateProfile";
import Profiles from "./pages/Profiles";
import Automation from "./pages/Automation";
import Store from "./pages/Store";
import Schedules from "./pages/Schedules";
import Synchronizer from "./pages/Synchronizer";
import Affiliate from "./pages/Affiliate";
import Extensions from "./pages/Extensions";
import Teammembers from "./pages/Teammembers";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Help_Documents from "./pages/Help_Documents";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/CreateProfile" element={<CreateProfile/>} />
        <Route path="/Profiles" element={<Profiles/>} />
        <Route path="/Store" element={<Store/>} />
        <Route path="/Automation" element={<Automation/>} />
        <Route path="/Schedules" element={<Schedules/>} />
        <Route path="/Synchronizer" element={<Synchronizer/>} />
        <Route path="/Affiliate" element={<Affiliate/>} />
        <Route path="/Extensions" element={<Extensions/>} />  

        <Route path="/Team members" element={<Teammembers/>} />
        <Route path="/Billing" element={<Billing/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/Help & Documents" element={<Help_Documents/>} />  

      </Route>
    </Routes>
  );
}

export default App;
