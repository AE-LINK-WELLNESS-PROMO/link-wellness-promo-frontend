import React, { createContext, useContext, useState } from 'react';

interface UserInfo {
  age: number;
  weight: number;
  heightFeet: number;
  heightInches: number;
  gender: string;
  bmi?: number;
  quizScore?: number;
  quizTotal?: number;
  basic_info_id?: string;
  answerDetails?: any;
}

interface UserInfoContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const defaultUserInfo: UserInfo = {
  age: 26,
  weight: 65,
  heightFeet: 5,
  heightInches: 7,
  gender: '',
  bmi: undefined,
  quizScore: 0,
  quizTotal: 200,
  basic_info_id: "",
};

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

export const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) throw new Error('useUserInfo must be used within a UserInfoProvider');
  return context;
};
