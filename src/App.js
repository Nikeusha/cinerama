import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="watch/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="filter/:id" element={<Filter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
