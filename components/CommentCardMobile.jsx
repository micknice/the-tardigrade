import { BiSolidUserCircle } from 'react-icons/bi'
import {IoReturnDownForwardSharp} from 'react-icons/io5'
import { getPostAge } from '@/utils/utils'
import CommentVotesWidget from './CommentVotesWidget'
import {AiOutlineArrowUp, AiOutlineDelete} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {patchVotesByCommentId, getUserByUsername, deleteCommentByCommentId} from '../pages/api/news/newsApi'
import { useSession, signIn, signOut } from 'next-auth/react'




const CommentCardMobile = ( {comment, article} ) => {
    const { data: session, status } = useSession()

    const [voted, setVoted] = useState(false)
    const [voteCount, setVoteCount] = useState(comment.votes)
    const [commenter, setCommenter] = useState(null)

    const handleVote = async (vote) => {
        if(!voted && vote === 'up'){
            setVoted(true)
            setVoteCount(voteCount + 1)
            const response = await patchVotesByCommentId(comment.comment_id, vote)
        } else if (voted && vote === 'down'){
            setVoted(false)
            setVoteCount(voteCount - 1)
            const response = await patchVotesByCommentId(comment.comment_id, vote)
        }
    }
    const handleDeleteComment = () => {
        console.log('delete comment', comment)
        deleteCommentByCommentId(comment.comment_id)
    }

    useEffect(() => {  
        const getCommenter = async () => {
            const response = await getUserByUsername(comment.author)
            setCommenter(response)
            
        }
        getCommenter()

    },[comment])

    return (
        <div className='border-t-[1px] border-guard-div-grey w-full h-auto flex flex-row pt-1 pb-2'>
            {!commenter &&
                <div className='w-1/12 h-auto flex flex-col items-center'>
                <BiSolidUserCircle size={60} color='#b4b5b6'/>
            </div>
            }
            {commenter &&
                <div className='w-1/12 h-auto flex flex-col items-center pl-1'>
                    <div className='h-[60px] w-[60px]  p-2'>
                        <img className='h-full w-full rounded-full  pb-1 object-scale-down' src={commenter.user.avatar_url} alt='/'/>
                    </div>
            </div>
            }
            <div className='w-11/12 h-auto flex flex-col px-2'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center justify-end'>
                        
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter px-1'>{comment.author}</p>
                        
                        <p className='text-guard-posted text-sm tracking-tighter px-1 pt-1'>{getPostAge(comment.created_at)}</p>
                    </div>
                    {/* vote button */}
                    {!voted &&
                    <div className='flex flex-row items-end justify-end' onClick={()=>{handleVote('up')}}>
                        {voteCount &&
                        <p className='text-guard-posted'>{voteCount}</p>
                        }
                        {session &&
                        <div className='bg-guard-topictile-red hover:bg-guard-topictile-hover-red hover:scale-105 rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
                        }
                        {!session &&
                        <div className='bg-guard-topictile-red rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
                        }
                    </div>
                    }
                    {voted &&
                    <div className='flex flex-row items-end justify-end' onClick={()=>{handleVote('down')}}>
                        {voteCount &&
                        <p className='text-guard-posted'>{voteCount}</p>
                        }
                        {session &&
                        <div className='bg-guard-topictile-red hover:bg-guard-topictile-hover-red hover:scale-105 rounded-full '><AiOutlineArrowUp size={20} color='#c70000'/></div>
                        }
                        {!session &&
                        <div className='bg-guard-topictile-red rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
                        }
                    </div>
                    }
                    
                </div>
                {/* comment */}
                <div className='flex flex-col'>
                    <p className='text-guard-subhead text-lg tracking-tighter px-1'>{comment.body}</p>
                </div>
                <div className='flex flex-row pt-3 justify-between'>
                    {/* delete button */}
                    <div className='flex flex-row items-center justify-end gap-x-4'>
                        
                        {/* {session && article.topic === 'coding' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        }
                        {session && article.topic === 'cooking' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        }
                        {session && article.topic === 'sky' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        }
                        {!session &&
                        <p className='text-guard-subhead text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        } */}
                    </div>
                    {/* mute and report buttons */}
                    {session && session.user.name === comment.author &&
                        <div className='flex flex-row rounded-full  hover:bg-guard-topictile-hover-red select-none' onClick={handleDeleteComment}>
                            <p className='text-guard-posted text-sm tracking-tighter px-1 underline underline-offset-4'>Delete comment</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CommentCardMobile