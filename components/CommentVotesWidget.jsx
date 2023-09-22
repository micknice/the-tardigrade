import {AiOutlineArrowUp} from 'react-icons/ai'
import { useUser } from '@auth0/nextjs-auth0/client';

const CommentVotesWidget = ({ comment, article }) => {

    const { user } = useUser();

    
    return (
        
        <div className='flex flex-row items-end justify-end'>
            <p className='text-guard-posted'>{comment.votes}</p>
            {user &&
            <div className='bg-guard-topictile-red hover:bg-guard-topictile-hover-red hover:scale-105 rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
            }
            {!user &&
            <div className='bg-guard-topictile-red rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
            }
        </div>
    )

}

export default CommentVotesWidget