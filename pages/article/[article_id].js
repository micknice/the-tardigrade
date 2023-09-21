// pages/[article_id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticleByArticleId } from '../api/news/newsApi';
import Article from '../../components/Article';
import { GetStaticProps, GetStaticPaths  } from 'next';

const ArticlePage = () => {
  const router = useRouter();
  const { article_id } = router.query;
  
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    if (article_id) {
      console.log(article_id)
      // Fetch the article by article_id and set it in the state
      const fetchArticle = async () => {
        const articleData = await getArticleByArticleId(article_id);
        setArticle(articleData);
      };
      fetchArticle();
    }
  }, [article_id]);

  if (!article) {
    // You can render a loading state here
    return <p>Loading...</p>;
  }

  // Render your article content using the fetched data
  return (
    <Article article={article}/>
  );
};

export default ArticlePage;
