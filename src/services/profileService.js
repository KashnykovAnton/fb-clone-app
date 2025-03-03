import { API_ENDPOINTS, apiClient } from "./api";

export async function fetchProfileAPI() {
    const { data } = await apiClient.get(`${API_ENDPOINTS.PROFILE}`);
    return data;
  }
  
  export async function fetchUpdateProfileAPI(profile) {
    const { data } = await apiClient.put(`${API_ENDPOINTS.PROFILE}`, profile);
    return data;
  }