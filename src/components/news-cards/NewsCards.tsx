import { useEffect } from "react";
import Loading from "../loading/Loading";
import style from "./newsCard.module.css";
import { Link } from "react-router-dom";
import { useNews } from "../../store/DataStore";
import { data } from "./../data/Data";

const NewsCards = () => {
  const { newsData, setNewsData } = useNews();
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setNewsData(data.results);
  //   }, 1000);
  // }, []);

  const baseURL= `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?`
  const apiKey =`54wEynan3sCkO0gpCqfCGQAMY1AeX92Q`

  useEffect(() => {
    const fetchNewsApi = async () => {
      try {
        const response = await fetch(
          `${baseURL}api-key=${apiKey}`
        );
        const data = await response.json();

        setNewsData(data.results);
      } catch (err) {
        console.log("error", err);
        throw err;
      }
    };

    fetchNewsApi();
  }, []);

  if (!newsData || newsData.length === 0) {
    console.log("loading");
    return <Loading />;
  }

  return (
    <ul className={style["list-wrap"]}>
    {newsData?.map((news: any) => {
      return (
        <li className={style["news-list"]} key={news.id}>
          <Link to={`/news/${news.id}`} className={style["link"]}>
            <div>
            {news.media[0] && news.media[0]['media-metadata'] && news.media[0]['media-metadata'].length >= 1 && (
              <img
                src={news.media[0]["media-metadata"][2].url} 
                alt={news.title}
              />)}
            </div>
            <h3 className={style["title"]}>{news.title}</h3>
            <p className={style["desc"]}>{news.abstract}</p>
            <p className={style["readMore"]}>Read More</p>
          </Link>
        </li>
      );
    })}
  </ul>
  
  );
};

export default NewsCards;
