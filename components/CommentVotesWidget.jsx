import {AiOutlineArrowUp} from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'

const CommentVotesWidget = ({ comment, article }) => {

    const { data: session, status } = useSession()

    
    return (
        
        <div className='flex flex-row items-end justify-end'>
            <p className='text-guard-posted'>{comment.votes}</p>
            {session.user &&
            <div className='bg-guard-topictile-red hover:bg-guard-topictile-hover-red hover:scale-105 rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
            }
            {!session.user &&
            <div className='bg-guard-topictile-red rounded-full '><AiOutlineArrowUp size={20} color='#707070'/></div>
            }
        </div>
    )

}

export default CommentVotesWidget