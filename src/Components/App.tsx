import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Mods from "./pages/Mods";
import Settings from "./pages/Settings";
import NoPage from "./pages/NoPage";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="mods" element={<Mods />} />
          <Route path="settings" element={<Settings />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
