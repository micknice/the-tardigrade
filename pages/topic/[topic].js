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
  const isMobile = useMediaQuery('(max-width: 1260px)');
  // const isMobile = useMediaQuery('(max-width: 1380px)');
  const { topic } = router.query;
  
  const [articles, setArticles] = useState(null);
  
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
