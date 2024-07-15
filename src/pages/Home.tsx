import { Suspense, useEffect } from "react";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import NewsCards from "../components/news-cards/NewsCards";

const Home = () => {
  
  return (
    <div className="container">

      <Navbar />

      <Banner />

      <Suspense fallback="Loading...">
        <NewsCards />
      </Suspense>
    </div>
  );
};

export default Home;
