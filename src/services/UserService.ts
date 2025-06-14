import { axiosInstanceNoToken } from "../common/AxiosInstance";
import { getUserId } from "./TokenService";

export const login = async (fullName: string, mobile: string) => {
  try {
    // POST /api/user-auth/login { full_name, mobile }
    const response = await axiosInstanceNoToken.post(`/user-auth/login`, {
      full_name: fullName,
      mobile,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const verifyOtp = async (mobile: string, otp: string) => {
  try {
    // GET /api/user-auth/verify_otp/:mobile/:otp
    const response = await axiosInstanceNoToken.get(
      `/user-auth/verify_otp/${mobile}/${otp}`
    );
    console.log("OTP verification response:", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "OTP verification failed" };
  }
};
export const getCurrentUser = async () => {
  try {
    // GET /users/:id
    const id = getUserId();
    if (!id) throw { message: "No user id found" };
    const response = await axiosInstanceNoToken.get(`/users/${id}?populate=*`);
    console.log("Current user response:", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Failed to fetch current user" };
  }
};

export const createBasicInfo = async (data: any) => {
  try {
    const response = await axiosInstanceNoToken.post(`/basic-informations`, data);
    console.log("Current user response:", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Failed to fetch current user" };
  }
};
  
export const updateBasicInfo = async (data: any, id: string) => {
  try {
    const response = await axiosInstanceNoToken.put(`/basic-informations/${id}`, data);
    console.log("Current user response:", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Failed to fetch current user" };
  }
};
