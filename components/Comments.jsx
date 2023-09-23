import React, { useEffect, useState } from 'react'
import {HiChevronDown} from 'react-icons/hi2'
import { BiSolidUserCircle } from 'react-icons/bi'
import CommentCard from './CommentCard'
import { getCommentsByArticleId } from '../pages/api/news/newsApi'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Dropdown } from 'flowbite-react';
import { compareVotes} from '../utils/utils'


const Comments = ({article}) => {

    const sortByOptions = [
        'Latest', 'Oldest', 'Votes'
      ];

    const { user } = useUser();

    const [comments, setComments] = useState([])
    const [commentsSort, setCommentsSort] = useState([])
    const [paginatedComments, setPaginatedComments] = useState([])
    const [sortBy, setSortBy] = useState('Latest')
    const [perPage, setPerPage] = useState(10)
    const [commentPage, setCommentPage] = useState(1)

    useEffect(() => {
        if (article) {
            const fetchComments = async() => {
                const commentsArr = await getCommentsByArticleId(article.article_id)
                setComments(commentsArr)
                setCommentsSort(commentsArr)
                console.log('commentsArr', commentsArr)
            }
            fetchComments()
        }
    }, [article])

    useEffect(() => {
        if(sortBy === 'Latest') {
            setCommentsSort(comments)
        } else if (sortBy === 'Oldest') {
            setCommentsSort(comments.reverse())
        } else if (sortBy === 'Votes') {
            const commentsSorted = comments.sort(compareVotes)
            setCommentsSort(commentsSorted)
        }

    }, [sortBy])
    
    useEffect(() => {
        if (perPage === 'All') {
            setPaginatedComments([commentsSort])
        } else if (perPage === 10){
            const paginatedArr = []
            for (let i=0; i<commentsSort.length; i+=10) {
                paginatedArr.push(commentsSort.slice(i, i+10))
            }
            setPaginatedComments(paginatedArr)
        } else if (perPage === 50){
            const paginatedArr = []
            for (let i=0; i<commentsSort.length; i+=50) {
                paginatedArr.push(commentsSort.slice(i, i+50))
            }
            setPaginatedComments(paginatedArr)
        }
        

    }, [perPage, commentsSort])

    const handleChangeSortBy = (sortStr) => {
        setSortBy(sortStr)
    }
    const handleChangePerPage = (perPageVal) => {
        setPerPage(perPageVal)
    }

    const handleChangePage = (pageVal) => {
        setCommentPage(pageVal)
    }

    return (
        <div className=' h-auto w-full border-t-[1px] border-x-guard-div-grey grid grid-cols-5'>
            <div className='h-[380px] w-full col-span-1 pt-1 px-4  flex flex-col'>
                <div className=' w-full flex flex-row gap-x-1 px-1'>
                    <p className='text-guard-subhead text-2xl font-black font-serif tracking-tighter'>comments</p>
                    <p className='text-guard-text-grey text-2xl font-black font-serif tracking-tighter'>{`(${comments.length})`}</p>
                </div>
                {user && user.picture &&
                <img className='h-auto w-[80px] rounded-full' src={user.picture} alt='/'/>
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
                                
                                {sortBy === 'Latest' && 
                                <Dropdown inline label={sortBy}>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Oldest')}}>
                                        Oldest
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Votes')}}>
                                        Votes
                                    </p>
                                </Dropdown>
                                }
                                {sortBy === 'Oldest' && 
                                <Dropdown inline label={sortBy}>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Latest')}}>
                                        Latest
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Votes')}}>
                                        Votes
                                    </p>
                                </Dropdown>
                                }
                                {sortBy === 'Votes' && 
                                <Dropdown inline label={sortBy}>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Latest')}}>
                                        Latest
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Oldest')}}>
                                        Oldest
                                    </p>
                                </Dropdown>
                                }
                            </div>
                            <div className=' border-l-[1px] px-2 flex flex-col'>
                            <p className='text-guard-posted font-semibold font-sans tracking-tight'>Per page</p>
                                <div className=' flex flex-row items-center  gap-x-1'>
                                    {/* <p className='text-guard-posted font-sans tracking-tight'>100</p>
                                    <div className='pt-1'>
                                        <HiChevronDown size={10} color='#707070'/>
                                    </div> */}
                                    {perPage === 10 &&

                                    <Dropdown inline label={perPage}>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(50)}}>
                                        50
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage('All')}}>
                                        All
                                    </p>
                                    </Dropdown>
                                    }
                                    {perPage === 50 &&

                                    <Dropdown inline label={perPage}>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(10)}}>
                                        10
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage('All')}}>
                                        All
                                    </p>
                                    </Dropdown>
                                    }
                                    {perPage === 'All' &&

                                    <Dropdown inline label={perPage}>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(10)}}>
                                        10
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tight hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(50)}}>
                                        50
                                    </p>
                                    </Dropdown>
                                    }
                                </div>
                            </div>
                            {/* <div className=' border-l-[1px] px-2 flex flex-col'>
                            <p className='text-guard-posted font-semibold font-sans tracking-tight'>Display threads</p>
                                <div className=' flex flex-row items-center  gap-x-1'>
                                    <p className='text-guard-posted font-sans tracking-tight'>Collapsed</p>
                                    <div className='pt-1'>
                                        <HiChevronDown size={10} color='#707070'/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className=' border-t-[1px]  border-guard-div-grey flex flex-row py-1 gap-x-3 items-center' >
                            {paginatedComments.length > 0 &&
                            paginatedComments.map((page, index) => 
                                <div className='h-5 w-5  rounded-full  hover:bg-guard-topictile-hover-red flex items-center justify-center pr-1 pb-1' onClick={()=>{handleChangePage(index + 1)}}>
                                    {commentPage === index + 1 &&
                                    <p className='text-guard-topicheadtext-red font-semibold font-sans tracking-tight '>{index+1}</p>
                                    }
                                    {commentPage !== index + 1 &&
                                    <p className='text-guard-posted font-semibold font-sans tracking-tight hover:text-guard-subhead select-none  '>{index+1}</p>
                                    }
                                </div>
                            )}
                        </div>
                        

                            {paginatedComments.length > 0 ? paginatedComments[0].map((comment) => {
                                return (
                                    <CommentCard key={comment.comment_id} comment={comment} article={article}/>
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