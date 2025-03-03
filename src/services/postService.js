import { API_ENDPOINTS, apiClient } from "./api";

export async function fetchPosts() {
    const { data } = await apiClient.get(API_ENDPOINTS.POSTS);
    return data;
  }
  
  export async function fetchPostById(id) {
    const { data } = await apiClient.get(`${API_ENDPOINTS.POSTS}/${id}`);
    return data;
  }
  
  export async function fetchAddPost(post) {
    const { data } = await apiClient.post(`${API_ENDPOINTS.POSTS}`, post);
    return data;
  }
  
  export async function fetchDeletePost(id) {
    const { data } = await apiClient.delete(`${API_ENDPOINTS.POSTS}/${id}`);
    return data;
  }
  
  export async function fetchUpdatePost(id, post) {
    const { data } = await apiClient.put(`${API_ENDPOINTS.POSTS}/${id}`, post);
    return data;
  }