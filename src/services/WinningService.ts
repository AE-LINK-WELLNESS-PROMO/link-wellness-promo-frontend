import { axiosInstanceNoToken } from "../common/AxiosInstance";
import { getMobile, getUserId } from "./TokenService";

export const sendWinningPromo = async (promoCode: string) => {
  const userId = getUserId();
  if (!userId) return;
  const generated_date = new Date().toLocaleDateString("en-GB"); // dd/mm/yyyy
  try {
    const response = await axiosInstanceNoToken.post("/winnings/create", {
      promocode: promoCode,
      generated_date,
      user: userId,
      mobile: getMobile()
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
