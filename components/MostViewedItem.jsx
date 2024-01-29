import { useMediaQuery } from '@mui/material'
const MostViewedItem = ({article}) => {

    const isCondensed = useMediaQuery('(max-width: 1670px)');
    return (
        <div className=' grid grid-cols-5 w-full h-auto pt-2 gap-x-2'>
                {!isCondensed &&
            <div className=' w-16  h-16 rounded-full '>

                    <img className='rounded-full h-16 w-16 object-cover' src={article.article_img_url} alt='/'></img>
            </div>
                }
            <p className='text-black text- font-bold font-serif col-span-4 pl-3 leading-tight'>{article.title}</p>
        </div>
    )
}


export default MostViewedItem