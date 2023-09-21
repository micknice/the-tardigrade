import { BiSolidUserCircle } from 'react-icons/bi'
import {IoReturnDownForwardSharp} from 'react-icons/io5'
import { getPostAge } from '@/utils/utils'
import CommentVotesWidget from './CommentVotesWidget'



const CommentCard = ( {comment} ) => {
    return (
        
        <div className='border-t-[1px] border-guard-div-grey w-full h-auto flex flex-row pt-1 pb-2'>
            <div className='w-1/12 h-auto flex flex-col items-center'>
                <BiSolidUserCircle size={60} color='#b4b5b6'/>
            </div>
            <div className='w-11/12 h-auto flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center justify-end'>
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter px-1'>{comment.author}</p>
                        <p className='text-guard-posted text-sm tracking-tighter px-1 pt-1'>{getPostAge(comment.created_at)}</p>
                    </div>
                        <CommentVotesWidget comment={comment}/>
                    
                </div>
                <div className='flex flex-col'>
                    <p className='text-guard-subhead text-lg tracking-tighter px-1'>{comment.body}</p>
                </div>
                <div className='flex flex-row pt-3 justify-between'>
                    <div className='flex flex-row items-center justify-end gap-x-4'>
                        <IoReturnDownForwardSharp size={20} color='#707070'/>
                        <p className='text-guard-topicheadtext-red text-lg font-bold tracking-tighter underline underline-offset-4'>Reply</p>
                    </div>
                        <div className='flex flex-row items-end justify-end'>
                            <p className='text-guard-posted text-sm tracking-tighter px-1 underline underline-offset-4'>Mute</p>
                            <p className='text-guard-posted text-sm tracking-tighter px-1 underline underline-offset-4'>Report</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard