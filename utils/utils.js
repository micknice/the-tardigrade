import { getArticleByArticleId, getArticlesByArticleId } from "@/pages/api/news/newsApi"

const formatDate = (dateStr) => {
    const date = new Date(dateStr).toUTCString()
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
            if (fullTitleSplitArr[1]) {
                fullTitle = `${fullTitleSplitArr[0]} ${fullTitleSplitArr[1]}.`
            } else {
            fullTitle = `${fullTitleSplitArr[0]}.`
        }   }
        if (fullTitle.length > 40) {
            const slice = fullTitle.slice(0, 37)
            fullTitle = `${slice}...`
        }
        return fullTitle
}

const capitalizeAuthor = (author) => {
    const splitStr = author.split(' ')
    if (splitStr.length === 1) {
        return `${splitStr[0][0].toUpperCase()}${splitStr[0].slice(1, splitStr[0].length)}`
    } else {
        const first = `${splitStr[0][0].toUpperCase()}${splitStr[0].slice(1, splitStr[0].length)}`
        const second = `${splitStr[1][0].toUpperCase()}${splitStr[1].slice(1, splitStr[1].length)}`
        return `${first} ${second}`
    }
}

const getSimilarArticles = async(article) => {
    const firstSimilar = await getArticleByArticleId(article.similar_article)
    const similarArticleArr = [firstSimilar]
    while(similarArticleArr.length < 6) {
        const nextSimilar = await getArticleByArticleId(similarArticleArr[similarArticleArr.length - 1].similar_article)
            similarArticleArr.push(nextSimilar)
    }
    return similarArticleArr
}

export {getPostAge, getShortenedTitle, capitalizeAuthor, formatDate, getSimilarArticles}