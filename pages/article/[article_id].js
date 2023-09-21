// pages/[article_id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticleByArticleId } from '../api/news/newsApi';
import Article from '../../components/Article';

const ArticlePage = () => {
  const router = useRouter();
  const { article_id } = router.query;
  
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    if (article_id) {
      const fetchArticle = async () => {
        const articleData = await getArticleByArticleId(article_id);
        setArticle(articleData);
      };
      fetchArticle();
    }
  }, [article_id]);

  // if (!article) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Article article={article}/>
  );
};

export default ArticlePage;
