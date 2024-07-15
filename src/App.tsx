import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NewsProvider } from "./store/DataStore";
import NewsPageDetails from "./pages/NewsPageDetails";

function App() {
  return (
    <div className="container">
      <NewsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/news/:id" element={<NewsPageDetails />} />
          </Routes>
        </Router>
      </NewsProvider>
    </div>
  );
}

export default App;
