



const MostViewedItem = ({imgUrl, headline}) => {
    return (
        <div className=' grid grid-cols-5 w-full h-20 pt-2 '>
            <div className=' w-16  h-16 rounded-full '>
                <img className='rounded-full h-16 w-16 object-cover' src={imgUrl}></img>
            </div>
            <p className='text-black text-lg font-old font-serif col-span-4 pl-3 leading-tight'>{headline}</p>
        </div>
    )
}


export default MostViewedItem