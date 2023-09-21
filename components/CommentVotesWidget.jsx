import {AiOutlineArrowUp} from 'react-icons/ai'


const CommentVotesWidget = ({ comment }) => {

    return (
        <div className='flex flex-row items-end justify-end'>
            <p className='text-guard-posted'>{comment.votes}</p>
            <div className='bg-guard-topictile-red rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
        </div>
    )

}

export default CommentVotesWidget