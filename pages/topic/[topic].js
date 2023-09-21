// pages/[topic].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticlesByTopic } from '../api/news/newsApi';
import Topic from '../../components/Topic';
import { GetStaticProps, GetStaticPaths  } from 'next';


const ArticlePage = () => {
  const router = useRouter();
  const { topic } = router.query;
  
  const [articles, setArticles] = useState(null);
  
  useEffect(() => {
    if (topic) {
      const fetchArticle = async () => {
        const articlesData = await getArticlesByTopic(topic);
        setArticles(articlesData);
      };
      fetchArticle();
    }
  }, [topic]);

  // if (!articles) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Topic topic={topic}/>
  );
};

export default ArticlePage;
