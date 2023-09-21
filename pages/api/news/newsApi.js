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
    return data.articles;
}
const getArticlesByTopic = async (topic) => {
    const topicStr = topic.toLowerCase()
    const { data } = await niceNewsApi.get(`/articles?topic=${topicStr}`);
    return data.articles;
}
const getArticleByArticleId = async (articleId) => {
    const { data } = await niceNewsApi.get(`/articles/${articleId}`);
    return data.article;
}
const getCommentsByArticleId = async (articleId) => {
    const { data } = await niceNewsApi.get(`/articles/${articleId}/comments`);
    return data.comments;
}
const postCommentByArticleId = async (articleId, username, body) => {
    const reqBody = {username: username, body: body}   
    const { data } = await niceNewsApi.post(`/articles/${articleId}/comments`, reqBody);
    return data.posted_comment;
}
const patchVotesByArticleId = async (articleId) => {
    const reqBody = {inc_votes: 1}    
    const { data } = await niceNewsApi.patch(`/articles/${articleId}`, reqBody);
    return data.patched_article;

}
const getUsers = async () => {
    const { data } = await niceNewsApi.get('/users');
    return data.users;
}
const deleteCommentByCommentId = async (commentId) => {
    const { data } = await niceNewsApi.delete(`/comments/${commentId}`);
    return data.article;

}

const patchVotesByCommentId = async (commentId) => {
    const reqBody = {inc_votes: 1}
    const { data } = await niceNewsApi.patch(`/comments/${commentId}`, reqBody)
    return data.patched_comment
}





export { getTopics, getArticles, getArticlesByTopic, getArticleByArticleId, getCommentsByArticleId, postCommentByArticleId, patchVotesByArticleId, getUsers, deleteCommentByCommentId, patchVotesByCommentId };