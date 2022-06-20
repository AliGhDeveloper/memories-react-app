import axios from 'axios';

const url = 'https://myapp-ali-memories.herokuapp.com/posts'
export const fetchPosts = () => axios.get(url);
export const createPost = (data) => axios.post(url, data);
export const updatePost = (id, data) => axios.patch(`${url}/${id}`, data);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
    




