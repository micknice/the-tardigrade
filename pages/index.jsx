import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import MainMobile from '../components/MainMobile'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { getArticles } from './api/news/newsApi'
import { checkIfLive } from '@/utils/utils' 
import Tardigrade from '../public/assets/TheTardigrade.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home({photo}) {

  const isMobile = useMediaQuery('(max-width: 1260px)');
  const [headlinesArr, setHeadlinesArr] = useState(null)
  const [live, setLive] = useState(false)

    useEffect(() => {
        const fetchArticles = async() => {
            const articlesArr = await getArticles()
            const headlines = []
            for(let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * (articlesArr.length))
                headlines.push(articlesArr[randomIndex])
            }
            setHeadlinesArr(headlines)
        }
        // const fetchLive = async() => { 
        //     const live = await checkIfLive('UCeY0bbntWzzVIaj2z3QigXg')
        //     setLive(live)
        //  }
        fetchArticles()

    }, [])

  return (
    <div >
      <Head>
        <title>The Tardigrade</title>
        <meta name="description" content="Its a marathon not a sprint"/>
        <meta property='og:title' content='The Tardigrade'/>
        <meta property='og:description' content='Its a marathon not a sprint'/>
        <meta property='og:url' content='https://thetardigrade.co.uk'/>
        <meta property='og:type' content='website'/>
        <meta property='og:twitter:card' content='summary'/>
      

        <meta property='og:image' content={photo?.url}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile && headlinesArr &&
      <MainMobile headlinesArr={headlinesArr}/>
      }
      {!isMobile && headlinesArr &&
      <Main headlinesArr={headlinesArr}/>
      }
      

    </div>
  )
}

export const getServerSideProps = async () => {
  
  let photo = null;
  await fetch('https://thetardigrade.co.uk')
    .then((response) => response.json())
    .then((json) =>{
      photo=json
    })
  

  return {
    props: {
      photo,
    },
  };
};


