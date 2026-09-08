import api from "../lib/axios";

export const ImagesAPI = {
  getRecentImages: async () => {
    try {
      const response = await api.get("/images/recent-images");
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        console.error(
          "Network/CORS error: Check server status and CORS headers.",
        );
      } else {
        console.error(
          `Server error: ${error.response.status}`,
          error.response.data,
        );
      }
      throw error;
    }
  },
};
