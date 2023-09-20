
const formatDate = (dateStr) => {
    console.log('dateStr', dateStr)
    const date = new Date(dateStr).toUTCString()
    console.log(date)
    return date
}


const getPostAge = (timeOfCreation) => {
    const creation = new Date(timeOfCreation)
    const now = new Date(Date())
    const diff = (((now - creation) / 1000) / 60) / 60
    if (diff < 1) {
        return 'Less than 1h ago'
    } else if (Math.floor(diff) < 24) {
        return `${Math.floor(diff)}h ago`
    } else if (Math.floor(diff / 24) < 7) {
        return `${Math.floor(diff / 24)}d ago`
    } else if (Math.floor((diff / 24) / 7) < 52) {
        return `${Math.floor((diff / 24) / 7)}w ago`
    } else  {
        return `${Math.floor(((diff / 24) / 7) / 52)}y ago`
    }
}

const getShortenedTitle = (title) => {
    const fullTitleSplitArr = title.split(/[.?]/)
        let fullTitle = fullTitleSplitArr[0]
        if(fullTitle.length < 60) {
            fullTitle = `${fullTitleSplitArr[0]} ${fullTitleSplitArr[1]}.`
        }
        if (fullTitle.length > 40) {
            const slice = fullTitle.slice(0, 37)
            fullTitle = `${slice}...`
        }
        return fullTitle

}

const capitalizeAuthor = (author) => {
    console.log('author', author)
    const splitStr = author.split(' ')
    if (splitStr.length === 1) {
        return `${splitStr[0][0].toUpperCase()}${splitStr[0].slice(1, splitStr[0].length)}`
    } else {
        const first = `${splitStr[0][0].toUpperCase()}${splitStr[0].slice(1, splitStr[0].length)}`
        const second = `${splitStr[1][0].toUpperCase()}${splitStr[1].slice(1, splitStr[1].length)}`
        return `${first} ${second}`

    }
}


export {getPostAge, getShortenedTitle, capitalizeAuthor, formatDate}