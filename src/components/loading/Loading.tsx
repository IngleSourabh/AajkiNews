import style from "./loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={style["loading"]}></div>
      <div className={style["loading"]}></div>
      <div className={style["loading"]}></div>
    </>
  );
};

export default Loading;
