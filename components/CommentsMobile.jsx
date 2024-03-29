import React, { useEffect, useState } from 'react'
import { BiSolidUserCircle } from 'react-icons/bi'
import CommentCardMobile from './CommentCardMobile'
import { getCommentsByArticleId, postCommentByArticleId } from '../pages/api/news/newsApi'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Dropdown } from 'flowbite-react';
import { sortByVotesDescending} from '../utils/utils'


const CommentsMobile = ({article}) => {

    const sortByOptions = [
        'Latest', 'Oldest', 'Votes'
      ];

    const { data: session, status } = useSession()

    const [comments, setComments] = useState([])
    const [commentsSort, setCommentsSort] = useState([])
    const [paginatedComments, setPaginatedComments] = useState([])
    const [sortBy, setSortBy] = useState('Latest')
    const [perPage, setPerPage] = useState('All')
    const [commentPage, setCommentPage] = useState(1)
    const [commentText, setCommentText] = useState('')

    useEffect(() => {
        if (article) {
            const fetchComments = async() => {
                const commentsArr = await getCommentsByArticleId(article.article_id)
                const commentsClone = [...commentsArr]
                setComments(commentsClone)
                setCommentsSort(commentsClone)
            }
            fetchComments()
        }
    }, [article])

    useEffect(() => {
        if(sortBy === 'Latest') {
            setCommentsSort(comments)
        } else if (sortBy === 'Oldest') {
            const commentsClone = [...comments]
            commentsClone.reverse()
            setCommentsSort(commentsClone)
        } else if (sortBy === 'Votes') {
            const commentsClone = [...comments]
            sortByVotesDescending(commentsClone)
            const commentsSorted = commentsClone
            setCommentsSort(commentsSorted)
        }
        
    }, [sortBy, comments])
    
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

    const handleChangeComment = (e) => {
        setCommentText(e.target.value)
    }

    const handleSubmitComment = async() => {
        if (session) {
            const response = await postCommentByArticleId(article.article_id, session.user.name, commentText)
            const pendingComment = response.data.posted_comment
            const commentsClone = [pendingComment, ...paginatedComments[0]]
            setComments(commentsClone)

        }
    }

    return (
        <div className=' h-auto w-full border-t-[1px] border-x-guard-div-grey  pb-2 '>
            <div className=' w-full  pt-1 px-2  flex flex-col '>
                <div className=' w-full flex flex-row gap-x-1 pb-1 '>
                    <p className='text-guard-subhead text-xl font-black font-serif tracking-tighter'>comments</p>
                    <p className='text-guard-text-grey text-xl font-black font-serif tracking-tighter'>{`(${comments.length})`}</p>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                    {session && session.user.image &&
                    <div>
                        <img className='h-auto w-[40px] rounded-full pb-1 object-scale-down' src={session.user.image} alt='/'/>
                        </div>
                    }
                    {!session || !session.user.image &&
                    <BiSolidUserCircle size={80} color='#b4b5b6'/>
                    }
                    {session &&
                    <div className='pb-1'>
                    <p className='text-guard-posted text-sm tracking-tighter '>Signed in as:</p>
                    <p className='text-guard-subhead text-sm font-bold tracking-tighter '>{session.user.name}</p>
                    </div>
                    }
                </div>
                {!session &&
                <div className='hover:bg-guard-topictile-red w-1/3 rounded-full select-none' onClick={()=> {signIn()}}>
                <p className='text-guard-posted text-lg tracking-tighter hover:text-guard-subhead'>Sign in...</p>
                </div>
                }
            </div>
            <div className=''>
                <div className=' '>
                    <div className='  h-2  flex flex-row pt-2 gap-x-3 ' />
                    {/* comment text box */}
                        <div className='h-16  pb-3 px-2'>
                            <textarea className='h-full w-full px-2 py-1 placeholder:text-black border-[1px] border-guard-div-grey font-bold tracking-tighter ' placeholder='Join the discussion' onChange={(e)=> {handleChangeComment(e)}}/>
                        </div>
                        {/* post comment button */}
                        <div className='pl-2'>
                            <div className='h-9 w-36 bg-guard-topicheadtext-orange hover:bg-guard-topicheadtext-red rounded-full flex items-center pt-2 select-none ' onClick={handleSubmitComment}>
                                <p className='h-full w-full text-white text-sm font-sans font-bold tracking-tighter px-2'>Post your comment</p>
                            </div>
                        </div>
                        <div className='h-5'/>
                        <div className='flex flex-row h-auto gap-x-3 pb-3 border-t-[1px] pl-2'>

                            <div className=''>
                            <p className='text-guard-posted font-semibold font-sans  tracking-tighter'>Sort by</p>
                                
                                {sortBy === 'Latest' && 
                                <Dropdown inline label={sortBy}>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Oldest')}}>
                                        Oldest
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Votes')}}>
                                        Votes
                                    </p>
                                </Dropdown>
                                }
                                {sortBy === 'Oldest' && 
                                <Dropdown inline label={sortBy}>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Latest')}}>
                                        Latest
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Votes')}}>
                                        Votes
                                    </p>
                                </Dropdown>
                                }
                                {sortBy === 'Votes' && 
                                <Dropdown inline label={sortBy}>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Latest')}}>
                                        Latest
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangeSortBy('Oldest')}}>
                                        Oldest
                                    </p>
                                </Dropdown>
                                }
                            </div>

                            <div className=' border-l-[1px] px-2 flex flex-col '>
                            <p className='text-guard-posted font-semibold font-sans tracking-tighter'>Per page</p>
                                <div className=' flex flex-row items-center  gap-x-1'>
                                    
                                    {perPage === 10 &&

                                    <Dropdown inline label={perPage}>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(50)}}>
                                        50
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage('All')}}>
                                        All
                                    </p>
                                    </Dropdown>
                                    }
                                    {perPage === 50 &&

                                    <Dropdown inline label={perPage}>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(10)}}>
                                        10
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage('All')}}>
                                        All
                                    </p>
                                    </Dropdown>
                                    }
                                    {perPage === 'All' &&

                                    <Dropdown inline label={perPage}>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(10)}}>
                                        10
                                    </p>
                                    <p className='text-guard-posted font-sans tracking-tighter hover:text-guard-subhead select-none px-2 hover:bg-guard-topictile-hover-red' onClick={() => {handleChangePerPage(50)}}>
                                        50
                                    </p>
                                    </Dropdown>
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className=' border-t-[1px]  border-guard-div-grey flex flex-row py-1 gap-x-3 items-center ' >
                            {paginatedComments.length > 0 &&
                            paginatedComments.map((page, index) => 
                                <div key={index} className='h-5 w-5  rounded-full  hover:bg-guard-topictile-hover-red flex items-center justify-center pr-1 pb-1 pl-2' onClick={()=>{handleChangePage(index + 1)}}>
                                    {commentPage === index + 1 &&
                                    <p className='text-guard-topicheadtext-red font-semibold font-sans tracking-tighter '>{index+1}</p>
                                    }
                                    {commentPage !== index + 1 &&
                                    <p className='text-guard-posted font-semibold font-sans tracking-tighter hover:text-guard-subhead select-none  '>{index+1}</p>
                                    }
                                </div>
                            )}
                        </div>

                            {paginatedComments.length > 0 ? paginatedComments[0].map((comment) => {
                                return (
                                    <div key={`${comment.comment_id}_div`}className='px-2'>
                                        <CommentCardMobile key={comment.comment_id} comment={comment} article={article} />
                                    </div>
                                    )
                                }) : (
                                    <div className='h-full w-full flex flex-col justify-center items-center'>
                                        <p className='text-guard-posted text-lg tracking-tighter px-1'>Be the first to comment</p>
                                        <p className='text-guard-posted text-lg tracking-tighter px-1'>on this article</p>
                                    </div>
                                )
                            }
                        

                </div>
            </div>
        </div>
    )
}

export default CommentsMobile