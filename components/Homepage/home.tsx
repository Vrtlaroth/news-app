import React, { useEffect } from "react";
import { setNewsData } from "../../src/actions/setNewsData";
import { useNewsContext } from "../../src/Contexts/newscontext";
import { newsApi } from "../../src/hooks/newsApi";
import { INewsData } from "../../src/interfaces";
import "./home.scss";

const Home: React.FC = () => {
  const { state, dispatch } = useNewsContext();

  useEffect(() => {
    if (!state.loaded) {
      newsApi().then((data: any) => {
        dispatch(setNewsData(data.articles, state.currentCategory));
      });
    }
    console.log(state);
  });

  return (
    <div>
      <div>
        {state.articles.map((value: INewsData) => {
          return (
            <div className="maxw news-container">
              <p className="news-item">{value.title}</p>
              <p className="news-item">{value.author}</p>
              {<img src={value.urlToImage} alt="" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
