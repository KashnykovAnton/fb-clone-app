import { errorMessage } from "../services/toasts";

export const handleError = (error) => {
  const message = error.response?.data?.message || error.message || "An unexpected error occurred";
  errorMessage(message);
};
