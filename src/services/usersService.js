import { API_ENDPOINTS, apiClient } from "./api";

export async function fetchUsers() {
    const { data } = await apiClient.get(`${API_ENDPOINTS.USERS}`);
    return data;
  }
  
  export async function fetchUserById(id) {
    const { data } = await apiClient.get(`${API_ENDPOINTS.USERS}/${id}`);
    return data;
  }
  
  export async function fetchAddUser(user) {
    const { data } = await apiClient.post(`${API_ENDPOINTS.USERS}`, user);
    return data;
  }
  
  export async function fetchDeleteUser(id) {
    const { data } = await apiClient.delete(`${API_ENDPOINTS.USERS}/${id}`);
    return data;
  }
  
  export async function fetchUpdateUser(id, user) {
    const { data } = await apiClient.put(`${API_ENDPOINTS.USERS}/${id}`, user);
    return data;
  }