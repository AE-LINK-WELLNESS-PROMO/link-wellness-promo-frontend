const localStorageKey = "374#4$u83link38welness9318";

export const getToken = () =>
  JSON.parse(localStorage.getItem(localStorageKey) || "null");
export const saveToken = (token: string) =>
  localStorage.setItem(localStorageKey, JSON.stringify(token));

export const removeToken = () => localStorage.removeItem(localStorageKey);
export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};
export const getUserId = () => {
  const token = getToken();
  return token?.userId || null;
};
export const getUserDocumentId = () => {
  const token = getToken();
  return token?.documentId || null;
};

export const getBasicInformation = () => {
  const token = getToken();
  return token?.basic_information || null;
};



export const getJWT= () => {
  const token = getToken();
  return token?.jwt || null;
};