import { BiSolidUserCircle } from 'react-icons/bi'
import {IoReturnDownForwardSharp} from 'react-icons/io5'
import { getPostAge } from '@/utils/utils'
import CommentVotesWidget from './CommentVotesWidget'
import { useUser } from '@auth0/nextjs-auth0/client';
import {AiOutlineArrowUp} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {patchVotesByCommentId} from '../pages/api/news/newsApi'



const CommentCard = ( {comment, article} ) => {
    const { user } = useUser();

    const [voted, setVoted] = useState(false)
    const [voteCount, setVoteCount] = useState(comment.votes)

    const handleVote = async (vote) => {
        if(!voted && vote === 'up'){
            setVoted(true)
            setVoteCount(voteCount + 1)
            const response = await patchVotesByCommentId(comment.comment_id, vote)
            console.log(response)
        } else if (voted && vote === 'down'){
            setVoted(false)
            setVoteCount(voteCount - 1)
            const response = await patchVotesByCommentId(comment.comment_id, )
            console.log(response)
        }
    }

    return (
        <div className='border-t-[1px] border-guard-div-grey w-full h-auto flex flex-row pt-1 pb-2'>
            <div className='w-1/12 h-auto flex flex-col items-center'>
                <BiSolidUserCircle size={60} color='#b4b5b6'/>
            </div>
            <div className='w-11/12 h-auto flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center justify-end'>
                        {article.topic === 'coding' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter px-1'>{comment.author}</p>
                        }
                        {article.topic === 'cooking' &&
                        <p className='text-guard-topicheadtext-orange text-lg font-bold tracking-tighter px-1'>{comment.author}</p>
                        }
                        {article.topic === 'sky' &&
                        <p className='text-guard-topicheadtext-sky text-lg font-bold tracking-tighter px-1'>{comment.author}</p>
                        }
                        <p className='text-guard-posted text-sm tracking-tighter px-1 pt-1'>{getPostAge(comment.created_at)}</p>
                    </div>
                    {/* vote button */}
                    {!voted &&
                    <div className='flex flex-row items-end justify-end' onClick={()=>{handleVote('up')}}>
                        {voteCount &&
                        <p className='text-guard-posted'>{voteCount}</p>
                        }
                        {user &&
                        <div className='bg-guard-topictile-red hover:bg-guard-topictile-hover-red hover:scale-105 rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
                        }
                        {!user &&
                        <div className='bg-guard-topictile-red rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
                        }
                    </div>
                    }
                    {voted &&
                    <div className='flex flex-row items-end justify-end' onClick={()=>{handleVote('down')}}>
                        {voteCount &&
                        <p className='text-guard-posted'>{voteCount}</p>
                        }
                        {user &&
                        <div className='bg-guard-topictile-red hover:bg-guard-topictile-hover-red hover:scale-105 rounded-full '><AiOutlineArrowUp size={20} color='#c70000'/></div>
                        }
                        {!user &&
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
                    {/* reply button */}
                    <div className='flex flex-row items-center justify-end gap-x-4'>
                        {user && 
                        <IoReturnDownForwardSharp size={20} color='#707070'/>
                        }
                        {user && article.topic === 'coding' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        }
                        {user && article.topic === 'cooking' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        }
                        {user && article.topic === 'sky' &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                    }
                        {!user &&
                        <p className='text-guard-subhead text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                        }
                    </div>
                    {/* mute and report buttons */}
                        {user &&
                        <div className='flex flex-row items-end justify-end'>
                            <p className='text-guard-posted text-sm tracking-tighter px-1 underline underline-offset-4'>Mute</p>
                            <p className='text-guard-posted text-sm tracking-tighter px-1 underline underline-offset-4'>Report</p>
                        </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default CommentCard