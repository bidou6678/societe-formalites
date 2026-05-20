import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreerMonEntreprisePage from "./pages/CreerMonEntreprisePage";
import CreerSituationPage from "./pages/CreerSituationPage";
import ModifierMonEntreprisePage from "./pages/ModifierMonEntreprisePage";
import ModifierSituationPage from "./pages/ModifierSituationPage";
import ModifierOffresPage from "./pages/ModifierOffresPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creer-mon-entreprise" element={<CreerMonEntreprisePage />} />
        <Route path="/creer-mon-entreprise/:forme" element={<CreerSituationPage />} />
        <Route path="/modifier-mon-entreprise" element={<ModifierMonEntreprisePage />} />
        <Route path="/modifier-mon-entreprise/:forme" element={<ModifierSituationPage />} />
        <Route path="/modifier-mon-entreprise/:forme/:situation" element={<ModifierOffresPage />} />
      </Routes>
    </BrowserRouter>
  );
}
