import React, { useEffect, useState } from 'react'
import MostViewedItem from '../components/MostViewedItem'
import { getSimilarArticles } from '@/utils/utils'

const MostViewed = ({article}) => {

    const [similarArticles, setSimilarArticles] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            if (article) {
            const articlesArr = await getSimilarArticles(article)
            setSimilarArticles(articlesArr)
            }
        }
        fetchArticles()
    }, [article])

    
    return (
        <div className=' flex flex-col justify-items-center px-2'>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-6'/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-[2px]'/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-[2px]'/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-[2px]'/>
            <p className='text-black text-lg font-black font-serif leading-tight'>Similar articles</p>
            {similarArticles[0] &&
                <MostViewedItem article={similarArticles[0]} />
            }
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            {similarArticles[1] &&
                <MostViewedItem article={similarArticles[1]} />
            }
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            {similarArticles[2] &&
                <MostViewedItem article={similarArticles[2]} />
            }
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            {similarArticles[3] &&
                <MostViewedItem article={similarArticles[3]} />
            }
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            {similarArticles[4] &&
                <MostViewedItem article={similarArticles[4]} />
            }            
    </div>
    )
}

export default MostViewed