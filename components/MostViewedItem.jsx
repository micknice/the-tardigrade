
const MostViewedItem = ({article}) => {
    return (
        <div className=' grid grid-cols-5 w-full h-20 pt-2 '>
            <div className=' w-16  h-16 rounded-full '>
                <img className='rounded-full h-16 w-16 object-cover' src={article.article_img_url}></img>
            </div>
            <p className='text-black text-lg font-old font-serif col-span-4 pl-3 leading-tight'>{article.title}</p>
        </div>
    )
}


export default MostViewedItem