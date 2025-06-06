import { axiosInstance, axiosInstanceNoToken } from "../common/AxiosInstance";
import { getJWT, getToken, getUserDocumentId, getUserId } from "./TokenService";
import { API_BASE } from "../common/const";

export const sendWinningPromo = async (promoCode: string) => {
  const userId = getUserId();
  if (!userId) return;
  const generated_date = new Date().toLocaleDateString("en-GB"); // dd/mm/yyyy
  try {
    const response = await axiosInstanceNoToken.post("/winnings/create", {
      promocode: promoCode,
      generated_date,
      user: userId,
    });

    return response.data;
  } catch (e) {
    // Optionally handle error
    console.error(e);
  }
};

export const checkWinning = async () => {
  const userId = getUserId();
  if (!userId) return;
  try {
    const response = await axiosInstanceNoToken.get("/winnings/check/" + userId);

    return response.data;
  } catch (e) {
    // Optionally handle error
    console.error(e);
  }
};
