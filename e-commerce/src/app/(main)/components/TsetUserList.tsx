import React from "react";
import { TestUserCard, UserType } from "./TsetUserCard";
type PropsList = { usersList: UserType[] };

export const TestUserList = ({ usersList }: PropsList) => {
  const close = () => {
    return false;
  };
  return (
    <div className="grid grid-cols-5 gap-4 m-10">
      {usersList.map((userListOne, index) => (
        <TestUserCard key={index} userProps={userListOne} closeProps={close} />
      ))}
    </div>
  );
};
