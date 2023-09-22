import React, { useEffect, useState } from 'react'
import {HiChevronDown} from 'react-icons/hi2'
import { BiSolidUserCircle } from 'react-icons/bi'
import CommentCard from './CommentCard'
import { getCommentsByArticleId } from '../pages/api/news/newsApi'
import { useUser } from '@auth0/nextjs-auth0/client';


const Comments = ({article}) => {

    const { user, isLoading, error, logout } = useUser();

    const [comments, setComments] = useState([])

    useEffect(() => {
        if (article) {
            const fetchComments = async() => {
                const commentsArr = await getCommentsByArticleId(article.article_id)
                setComments(commentsArr)
                console.log('commentsArr', commentsArr)
            }
            fetchComments()
        }
    }, [article])

    return (
        <div className=' h-auto w-full border-t-[1px] border-x-guard-div-grey grid grid-cols-5'>
            <div className='h-[380px] w-full col-span-1 pt-1 px-4  flex flex-col'>
                <div className=' w-full flex flex-row gap-x-1 px-1'>
                    <p className='text-guard-subhead text-2xl font-black font-serif tracking-tighter'>comments</p>
                    <p className='text-guard-text-grey text-2xl font-black font-serif tracking-tighter'>{`(${comments.length})`}</p>
                </div>
                {user && user.picture &&
                <img className='h-auto w-[80px] rounded-full' src={user.picture}/>
                // <BiSolidUserCircle size={80} color='#b4b5b6'/>
                }
                {!user || !user.picture &&
                <BiSolidUserCircle size={80} color='#b4b5b6'/>
                }
                {user &&
                <div>
                <p className='text-guard-posted text-lg tracking-tighter px-1'>Signed in as</p>
                <p className='text-guard-subhead text-lg font-bold tracking-tighter px-1'>{user.nickname}</p>
                </div>
                }
                {!user &&
                <div>
                <p className='text-guard-posted text-lg tracking-tighter px-1'>Sign in...</p>
                </div>
                }
            </div>
            <div className='col-span-4 grid grid-cols-3 '>
                <div className=' col-span-2'>
                    <div className=' border-b-[1px] h-2 border-guard-div-grey flex flex-row pt-2 gap-x-3' />
                        <div className='flex flex-row h-auto gap-x-3 pb-3'>

                            <div className=''>
                            <p className='text-guard-posted font-semibold font-sans tracking-tight'>Sort by</p>
                                <div className=' flex flex-row items-center  gap-x-1'>
                                    <p className='text-guard-posted font-sans tracking-tight'>Newest</p>
                                    <div className='pt-1'>
                                        <HiChevronDown size={10} color='#707070'/>
                                    </div>
                                </div>
                            </div>
                            <div className=' border-l-[1px] px-2 flex flex-col'>
                            <p className='text-guard-posted font-semibold font-sans tracking-tight'>Per page</p>
                                <div className=' flex flex-row items-center  gap-x-1'>
                                    <p className='text-guard-posted font-sans tracking-tight'>100</p>
                                    <div className='pt-1'>
                                        <HiChevronDown size={10} color='#707070'/>
                                    </div>
                                </div>
                            </div>
                            <div className=' border-l-[1px] px-2 flex flex-col'>
                            <p className='text-guard-posted font-semibold font-sans tracking-tight'>Display threads</p>
                                <div className=' flex flex-row items-center  gap-x-1'>
                                    <p className='text-guard-posted font-sans tracking-tight'>Collapsed</p>
                                    <div className='pt-1'>
                                        <HiChevronDown size={10} color='#707070'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                            {comments ? comments.map((comment) => {
                                return (
                                    <CommentCard comment={comment} article={article}/>
                                    )
                                }) : () => {
                                return (
                                    <div className='h-full w-full flex flex-col justify-center items-center'>
                                        <p className='text-guard-posted text-lg tracking-tighter px-1'>Be the first to comment</p>
                                        <p className='text-guard-posted text-lg tracking-tighter px-1'>on this article</p>
                                    </div>
                                )}
                            }
                        

                </div>
            </div>
        </div>
    )
}

export default Comments