import { Suspense, useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { data } from "./../data/Data";
import style from "./newsCard.module.css";
import { Link } from "react-router-dom";
import { useNews } from "../../store/DataStore";

const NewsCards = () => {
  //   const [newsData, setNewsData] = useState<any>([]);
  const { newsData, setNewsData } = useNews();
    useEffect(() => {
      const timeout = setTimeout(() => {
        setNewsData(data.results);
      }, 3000);

    }, []);

//   useEffect(() => {
//     const fetchNewsApi = async () => {
//       try {
//         const response = await fetch(
//           `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=54wEynan3sCkO0gpCqfCGQAMY1AeX92Q`
//         );
//         const data = await response.json();

//         setNewsData(data.results);
//       } catch (err) {
//         console.log("error", err);
//         throw err;
//       }
//     };

//     fetchNewsApi();
//   }, []);

  if (!newsData || newsData.length === 0) {
    console.log("loading");
    return <Loading />;
  }

  console.log(newsData[0], "newsData");

  return (
    <ul className={style["list-wrap"]}>
      {newsData?.map((news: any) => (
        <li className={style["news-list"]} key={news.id}>
          <Link to={`/news/${news.id}`}>
            <h3 className={style["title"]}>{news.title}</h3>
            <p className={style["desc"]}>{news.abstract}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsCards;
