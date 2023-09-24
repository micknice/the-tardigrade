import axios from 'axios';

const niceNewsApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_NCNEWS_API_URL,
});

const getTopics = async () => {
    const { data } = await niceNewsApi.get('/topics');
    return data.topics;
}
const getArticles = async () => {
    const { data } = await niceNewsApi.get('/articles');
    console.log("data", data.articles)
    return data.articles;
}
const getArticlesByTopic = async (topic) => {
    const topicStr = topic.toLowerCase()
    const { data } = await niceNewsApi.get(`/articles?topic=${topicStr}`);
    return data.articles;
}
const getArticleByArticleId = async (articleId) => {
    try {
        const { data } = await niceNewsApi.get(`/articles/${articleId}`);
        return data.article;
    } catch (err) {
        console.log(err, 'err')
    }
}
const getCommentsByArticleId = async (articleId) => {
    try {
        const { data } = await niceNewsApi.get(`/articles/${articleId}/comments`);
        return data.comments;
    } catch (err) {
        console.log(err, 'err')
    }
}
const postCommentByArticleId = async (articleId, username, body) => {
    const reqBody = {username: username, body: body}
    try {
        const  data  = await niceNewsApi.post(`/articles/${articleId}/comments`, reqBody);
        console.log(data, 'data')
        return data;
    } catch (err) { 
        console.log(err, 'err')
    }  
    ;
}
const patchVotesByArticleId = async (articleId) => {
    const reqBody = {inc_votes: 1}    
    try {
        const { data } = await niceNewsApi.patch(`/articles/${articleId}`, reqBody);
        return data.patched_article;
    } catch (err) {
        console.log(err, 'err')
    }
}
const getUsers = async () => {
    try {
        const { data } = await niceNewsApi.get('/users');
        return data.users;
    } catch (err) {
        console.log(err, 'err')
    }
}
const getUserByUsername = async (username) => {
    try {
        const { data } = await niceNewsApi.get(`/users/${username}`);
        return data
    } catch (err) {
        console.log(err, 'err')
    }
}
const deleteCommentByCommentId = async (commentId) => {
    try {
        const { data } = await niceNewsApi.delete(`/comments/${commentId}`);
        return data;
    } catch (err) {
        console.log(err, 'err')
    }
}

const patchVotesByCommentId = async (commentId, vote) => {
    if (vote === "up") {
        const reqBody = {inc_votes: 1}
        const { data } = await niceNewsApi.patch(`/comments/${commentId}`, reqBody)
        return data.patched_comment
    } else if (vote === "down") {
        const reqBody = {inc_votes: -1}
        const { data } = await niceNewsApi.patch(`/comments/${commentId}`, reqBody)
        return data.patched_comment
    }
}





export { getTopics, getArticles, getArticlesByTopic, getArticleByArticleId, getCommentsByArticleId, postCommentByArticleId, patchVotesByArticleId, 
    getUsers, deleteCommentByCommentId, patchVotesByCommentId, getUserByUsername };