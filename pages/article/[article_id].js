// pages/[article_id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticleByArticleId } from '../api/news/newsApi';
import Article from '../../components/Article';
import ArticleMobile from '../../components/ArticleMobile';
import { useMediaQuery } from '@mui/material'

const ArticlePage = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const { article_id } = router.query;
  
  const [article, setArticle] = useState(null);
    
  
    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', checkIsMobile);
  
      checkIsMobile();
  
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }, []);
  
  useEffect(() => {
    if (article_id) {
      const fetchArticle = async () => {
        const articleData = await getArticleByArticleId(article_id);
        setArticle(articleData);
      };
      fetchArticle();
    }
  }, [article_id]);

  

  return (
    <div>
      {isMobile &&
      <ArticleMobile article={article}/>
      }
      {!isMobile &&
      <Article article={article}/>
      }

    </div>
  );
};

export default ArticlePage;
