import { API_ENDPOINTS, apiClient } from "./api";

export async function fetchFriends() {
    const { data } = await apiClient.get(`${API_ENDPOINTS.FRIENDS}`);
    return data;
  }
  
  export async function fetchFriendById(id) {
    const { data } = await apiClient.get(`${API_ENDPOINTS.FRIENDS}/${id}`);
    return data;
  }
  
  export async function fetchUpdateFriend(id, friend) {
    const { data } = await apiClient.put(`${API_ENDPOINTS.FRIENDS}/${id}`, friend);
    return data;
  }