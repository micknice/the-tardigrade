// pages/[topic].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticlesByTopic } from '../api/news/newsApi';
import Topic from '../../components/Topic';
import TopicMobile from '../../components/TopicMobile';
import { GetStaticProps, GetStaticPaths  } from 'next';
import { useMediaQuery } from '@mui/material'


const ArticlePage = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 767px)');
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
    <div>
      {isMobile &&
      <TopicMobile topic={topic}/>
      }
      {!isMobile &&
      <Topic topic={topic}/>
      }

    </div>
    
  );
};

export default ArticlePage;
