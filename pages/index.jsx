import Main from '../components/Main'
import MainMobile from '../components/MainMobile'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { getArticles } from './api/news/newsApi'
import { checkIfLive, getAllLiveChannelInfo } from '@/utils/utils' 
import Tardigrade from '../public/assets/tard.png'
import channelArr from '../utils/ytChannels'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const isMobile = useMediaQuery('(max-width: 1260px)');
  const [headlinesArr, setHeadlinesArr] = useState(null)
  const [live, setLive] = useState(false)

    useEffect(() => {
        const fetchArticles = async() => {
          console.log('fetching articles')
            const articlesArr = await getArticles()
            const headlines = []
            for(let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * (articlesArr.length))
                headlines.push(articlesArr[randomIndex])
            }
            setHeadlinesArr(headlines)
        }
        const fetchLive = async() => { 
            console.log('fetching live')
            const liveChannels = await getAllLiveChannelInfo()
            console.log(liveChannels, 'LIVE CHANNELS!!!!')
         }
        fetchArticles()
        // fetchLive()

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
      

        <meta property='og:image' content={Tardigrade}/>
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




