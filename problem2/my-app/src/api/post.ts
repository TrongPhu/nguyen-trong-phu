import { sendGet, sendPost } from "./axios";

export const getPosts = (params: any) =>
sendGet(`/post/list`, params).then((res) => {
  return res?.data;
});

export const getDetailPost = (idPost: any) =>
sendGet(`/post/detail/${idPost}`).then((res) => {
  return res?.post;
});

export const createPost = (payload: any) =>
  sendPost('/post/create', payload).then((res) => res?.data);