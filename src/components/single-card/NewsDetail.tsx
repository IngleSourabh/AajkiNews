
import { useParams } from "react-router-dom";
import { useNews } from "./../../store/DataStore";
import style from './newsdetails.module.css';

const NewsDetail = () => {
  const { id } = useParams();
  const { newsData } = useNews();
 
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  

  if (!newsItem) {
    return <h1> There is no such data found !!! </h1>;
  }

  return (
    <div  className={`container ${style['detail-wrap']}`}>
      <h1 className={style["title"]}>{newsItem.title}</h1>

      <p className={style["desc"]}>published_date: {newsItem.published_date}</p>

      <p className={style["desc"]}>Section : {newsItem.section}</p>

      <p className={style["desc"]}>Byline : {newsItem.byline}</p>


      <p className={style["desc"]}>Desc : {newsItem.abstract}</p>


    </div>
  );
};

export default NewsDetail;
