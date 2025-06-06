import { axiosInstanceNoToken } from "../common/AxiosInstance";

export const createScore = async (data: any) => {
  try {
    const response = await axiosInstanceNoToken.post(`/questions-scores`, data);
    console.log("Current user response:", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Failed to fetch current user" };
  }
};

export const updateScore = async (data: any, id: string) => {
  try {
    const response = await axiosInstanceNoToken.put(
      `/questions-scores/${id}`,
      data
    );
    console.log("Current user response:", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Failed to fetch current user" };
  }
};
