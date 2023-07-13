import "./App.css";
import News from "./components/News";
import { useState, useEffect } from "react";
import SubNews from "./components/SubNews";
import Title from "./components/Title";
import VideoPlayer from "./components/VideoPlayer";
import Secondary from "./components/Secondary";
import NewsService from "./services/news";
import ExtraContent from "./components/ExtraContent";

function Layout() {
  const [data, SetData] = useState([]);

  function getUrlWithIndex(index) {
    if (data[index].Url.startsWith("https://")) {
      return data.Url;
    } else {
      return `https://${data[index].Source}/${data[index].Url}`;
    }
  }

 function getUrl(data) {
   return data.map((news) => {
      if (news.Url.startsWith("https://")) {
        return news.Url;
      } else {
        return `https://${news.Source}/${news.Url}`;
      }
    });
  }

  useEffect(() => {
    NewsService.getNews()
      .then((res) => {
        const meta = res.data.meta;
        const articles = res.data.data.articles.Response;

        if (meta.status_code === 200) {
          SetData(articles);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return data && data.length > 0 ? (
    <>
      <News data={data} getUrlWithIndex={getUrlWithIndex} />
      <SubNews data={data} getUrl={getUrl} />
      <Title data={data} />
      <VideoPlayer />
      <Secondary data={data} getUrl={getUrl} />
      <ExtraContent data={data} getUrl={getUrl}/>
    </>
  ) : (
    <>No data</>
  );
}

export default Layout;
