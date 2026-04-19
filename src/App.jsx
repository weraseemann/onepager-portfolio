import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import NightflixCaseStudy from "./pages/NightflixCaseStudy.jsx";
//import ProjectDetails from "./pages/ProjectCaseStudy.jsx";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
         <Route path="/case-study/nightflix" element={<NightflixCaseStudy />} />
        {/* <Route path="/projects/:slug" element={<ProjectDetails />} /> */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}